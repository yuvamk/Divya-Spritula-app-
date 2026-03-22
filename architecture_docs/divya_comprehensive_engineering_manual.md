# 🕉️ The Divya Engineering Manual: Building an Infinite Platform

This manual is designed for the aspiring **Principal Engineer or Chief Architect**. It details exactly *how* to build the Divya platform from scratch, covering the lowest levels of code to the highest levels of global infrastructure. If you masters these concepts, you are the perfect candidate to build and scale this platform.

---

## Part 1: The Core Philosophy - "Zero-Lag"
To build a system with zero lag, you must adopt one rule: **Never make the user wait for the database.** 
- **The Wrong Way**: User clicks "Donate" -> Server waits for Database -> Server waits for Razorpay -> Server replies to User (Takes 3 seconds).
- **The Divya Way**: User clicks "Donate" -> Server accepts request instantly (10ms) -> Server replies "Success" -> Event Stream processes Razorpay and Database in the background.

---

## Part 2: Database System Design (The Hybrid Approach)
Divya uses a **Co-Pilot Architecture**, splitting the workload between PostgreSQL (via Supabase) and Oracle ADW.

### 2.1 The Supabase (PostgreSQL) Layer
**Why?** PostgreSQL is incredible for real-time JSON operations and WebSockets.
**Implementation Example**: We use Supabase to handle User Profiles and Realtime Chat.
```sql
-- The essential Profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Realtime for the App
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
```

### 2.2 The Oracle ADW Layer
**Why?** Oracle Native Spatial indexing and Materialized Views are unmatched for heavy analytics and location data.
**Implementation Example**: To find "Temples within 5km of the devotee in under 10ms":
```sql
-- 1. Store the exact GPS coordinates using Oracle Spatial (SDO_GEOMETRY)
CREATE TABLE DIVYA_TEMPLES (
  ID RAW(16) DEFAULT SYS_GUID() PRIMARY KEY,
  NAME VARCHAR2(500) NOT NULL,
  LOCATION SDO_GEOMETRY
);

-- 2. Create the Spatial Index (This is the secret to zero-lag searches)
INSERT INTO USER_SDO_GEOM_METADATA VALUES (
  'DIVYA_TEMPLES', 'LOCATION',
  SDO_DIM_ARRAY(SDO_DIM_ELEMENT('LON',-180,180,0.005), SDO_DIM_ELEMENT('LAT',-90,90,0.005)), 4326
);
CREATE INDEX idx_temples_spatial ON DIVYA_TEMPLES(LOCATION) INDEXTYPE IS MDSYS.SPATIAL_INDEX_V2;

-- 3. The Query the Backend runs
SELECT NAME FROM DIVYA_TEMPLES 
WHERE SDO_WITHIN_DISTANCE(LOCATION, SDO_GEOMETRY(2001, 4326, SDO_POINT_TYPE(77.2, 28.6, NULL), NULL, NULL), 'distance=5 unit=KM') = 'TRUE';
```

---

## Part 3: Backend Architect (The Execution Layer)
The backend is built using **Deno Edge Functions** deployed via Supabase. We do not use traditional Node.js/Express servers because they suffer from "Cold Starts" (taking 3 seconds to boot up). Deno Edge Functions boot in 5 milliseconds.

### 3.1 Handling High-Concurrency Payments
If 10,000 people donate during a Live Aarti, the database will crash if they all try to update the `TOTAL_RAISED` number simultaneously.
**The Solution: Idempotent Event Streaming.**

```typescript
// supabase/functions/create-payment-order/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { amount, temple_id, user_id, idempotency_key } = await req.json();

  // 1. Check Redis Cache first to ensure this exact request wasn't already processed (Idempotency)
  const isDuplicate = await checkRedis(idempotency_key);
  if (isDuplicate) return new Response("Already Processed", { status: 200 });

  // 2. We DO NOT update the Oracle database here.
  // 3. We simply push an "Event" to a fast queue (like Kafka or AWS SQS)
  await pushToQueue("DONATION_EVENTS", { amount, temple_id, user_id });

  // 4. Return immediately to the user (Latency: 20ms)
  return new Response(JSON.stringify({ status: "Pending Verification" }));
});
```
*Note: A separate "Background Worker" reads the queue every 1 second and executes a single `UPDATE` statement in Oracle for all 10,000 donations at once.*

---

## Part 4: The AI Architecture (Gemini Integration)
Divya is an "AI-First" platform. We use **Google Gemini 1.5 Flash** for its extreme speed.

### 4.1 building the "Sankalp Engine"
The challenge is generating a mathematically and grammatically correct Sanskrit/Hindi Sankalp based on a user's intent.

```typescript
// supabase/functions/ai-features/index.ts
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.1.0";

const genAI = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY")!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { responseMimeType: "application/json" } });

// The "System Prompt" is the architecture of the AI
const systemPrompt = `
You are a Vedic Scholar AI for the Divya Platform. 
Your task: Take the devotee's details and generate a valid Sankalp statement in Hindi.
Output MUST be strict JSON: { "sankalp_text": string, "mantra_suggestion": string }
`;

const userPrompt = `Name: ${name}, Gotra: ${gotra}, Purpose: Health for parents.`;
const result = await model.generateContent([systemPrompt, userPrompt]);
// We parse the guaranteed JSON output and send it straight to the mobile app
```

---

## Part 5: The System Architect (Global Scraper & Delivery)
How do we get data from 10,000 temples without getting blocked?

### 5.1 Consistent Scraping Engine
If you use standard `fetch()` or `axios`, websites will block your IP address within minutes.
** The Solution: Residential Proxies and Headless Browsers (Puppeteer).**

```javascript
// Example Scraper Architecture
import puppeteer from 'puppeteer-core';

async function scrapeTempleTimings(url) {
  // 1. Connect to a Residential Proxy Network (e.g., BrightData or Oxylabs)
  const browser = await puppeteer.connect({ browserWSEndpoint: `wss://proxy.service.com/?session=${Math.random()}` });
  const page = await browser.newPage();
  
  // 2. Set varied User-Agents so we look like a real mobile phone
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15');
  
  await page.goto(url);
  const data = await page.evaluate(() => document.querySelector('.timings').innerText);
  
  // 3. Hash the data for Deduplication before saving
  const dataHash = crypto.createHash('md5').update(data).digest('hex');
  await saveToDatabase(data, dataHash); // Will ignore if hash already exists
}
```

---

## Part 6: DevSecOps (Infrastructure as Code)
A true architect never clicks buttons in a Web Dashboard to set up servers. They write code.

### 6.1 Creating the "Uncrashable" Environment
We use **Terraform** or **Pulumi** to define the infrastructure. If the AWS region goes down, we run one command and the whole platform boots up in a new region in 2 minutes.

```hcl
# example.tf - Defining the infrastructure
resource "aws_autoscaling_group" "divya_workers" {
  name                 = "divya-background-workers"
  min_size             = 2   # At 2 AM, use 2 servers (Save Money)
  max_size             = 100 # During Diwali, allow 100 servers (Handle Load)
  target_group_arns    = [aws_lb_target_group.main.arn]
}

resource "aws_wafv2_web_acl" "divya_firewall" {
  # WAF blocks SQL Injection and Rate Limits attackers automatically
  name  = "Divya-Global-WAF"
  scope = "CLOUDFRONT" # Blocks threats at the edge, before they reach our servers
}
```

---

## Final Review: Are You Ready?
To pass the interview and become the Chief Architect of Divya, you must be able to explain:
1. **Why we use Oracle Spatial over standard SQL `WHERE` clauses** (Answer: R-Tree indexing turns O(N) scans into O(log N) instantaneous lookups).
2. **Why we use Event Streams instead of direct database updates for payments** (Answer: To decouple the UI latency from the Database write-lock latency).
3. **Why we use Deno Edge Functions instead of Node.js** (Answer: 5ms cold starts via V8 isolates vs 3000ms cold starts in Docker containers).

By mastering these paradigms—Stateless Edge Compute, Event-Driven Aggregation, Hybrid Database modeling, and AI-First JSON generation—you have the exact blueprint required to build and scale Divya to a billion users.
