# 🕉️ Divya Master Architecture: The Grand Blueprint

As your **System, Backend, and Server Architects**, we have designed Divya to be an "Infinite Platform." This blueprint detail how every bit and byte is orchestrated to ensure a zero-lag, holy experience for 1.4 billion people.

## 1. The "Zero-Lag" Frontend (Architecting the UI)
A lag-free experience starts **before** the request hits the server.
- **Optimistic UI Updates**: When a devotee clicks "Donate," the UI immediately shows a success animation *while* the network request happens in the background.
- **Micro-State Management**: We use `Zustand` and `React Query` with **Server-State Caching**. The app doesn't ask the server "What are the timings?" if it already asked 5 minutes ago.
- **Skeleton Screens**: We load the structural layout first, then stream the data, ensuring the app feels "ready" in <100ms.

## 2. The "Shield" Layer (Server & Load Balancing)
- **Global Edge (Anycast)**: We use an Anycast IP. Whether you are in Ujjain or London, you hit the **same IP**, but the internet automatically routes you to the nearest physical server.
- **Consistent Hashing**: Our load balancers use the "Hash Ring" to ensure your session always stays on the same server, preventing "Session Flip-Flop" which causes lag.
- **Rate Limiting (Token Bucket)**: To prevent bot attacks, we limit requests per second per IP, ensuring real devotees always have priority.

## 3. The "Elastic" Backend (Business Logic & AI)
- **Stateless Edge Functions**: Every API call runs in its own isolated container (Deno). If 1 million people join a Live Aarti, the system spins up 1 million containers in seconds.
- **Asynchronous AI Orchestration**: For things like `ai-muhurat` or `ai-sankalp`, we don't make the user wait.
  - **The Design**: The request is "Accepted" instantly. The AI processes it in a separate thread. The result is pushed to the phone via **WebSockets** (Supabase Realtime) as soon as it's ready.

## 4. The "Hybrid" Database Strategy (Storage & Retrieval)
This is where the real architecture happens:
- **Write-Ahead Logging (WAL)**: Every transaction is written to a fast log first, then the database. This ensures no data is lost even if a server crashes mid-donation.
- **Read-Replicas**: All "Read" operations (checking temple info) go to local replica databases. All "Write" operations (bookings) go to the Master Oracle instance. This removes "Database Congestion."
- **Materialized Views**: In Oracle, we pre-calculate "Leaderboards" and "Total Donations." When a user asks "How much did we raise?", the database doesn't sum 1 million rows; it just reads a single, pre-calculated "View" in 0.001ms.

## 5. The "Consistent Scraping" Intelligence
Our data stays fresh without the system feeling "heavy":
- **Exponential Backoff**: If a temple site is slow, our scraper slows down automatically. 
- **Hash-Based Deduplication**: Every new data point is hashed. If we already have it, we discard it in the memory layer (Redis) before it even touches the main database.

## Summary: A Day in the Life of a Donation
1. **0ms**: User taps "Donate." UI shows "Processing..." (Optimistic UI).
2. **10ms**: Request hits the nearest **Edge Node** (Low Latency).
3. **25ms**: **Consistent Hashing** routes the request to a specific server.
4. **40ms**: **Razorpay Webhook** confirms payment.
5. **50ms**: **Event Stream** captures the event.
6. **60ms**: **Async Worker** updates the **Transparency Ledger** in Oracle.
7. **70ms**: **Supabase Realtime** pushes a notification to the user's phone.
8. **100ms**: User sees the final confirmation. **Lag = 0.**

**Architect's Note**: A scalable system is like a great temple. The foundation must be invisible (the database), the walls must be strong (the server), and the experience must be divine (the UI).
