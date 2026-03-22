---
title: "Divya Digital Mandir: Comprehensive Architecture Report"
author: "Chief Architecture Office"
date: "2026-03-22"
---

# Divya Platform: Zero-Lag Hyper-Scale Architecture Report

## Executive Summary
This document serves as the definitive architectural masterplan for the Divya platform. To support a user base scaling from hundreds to over a billion devotees without noticeable latency (lag), the system is designed across four distinct architectural pillars. This report details the specific algorithms, scaling strategies, and infrastructure decisions made by the System, Backend, Database, and DevSecOps architects to guarantee a zero-lag, highly secure, and globally consistent experience.

---

## 1. System Architecture (The Global Flow)
*Goal: Ensure the shortest physical and logical path between the devotee and the data.*

### 1.1 Global Edge Routing & CDN
To prevent geographic latency, the platform utilizes an **Anycast network**. 
- **Mechanism**: A user in New York hitting `api.divya.com` is automatically routed to an East Coast data center, while a user in Varanasi is routed to a Mumbai data center. 
- **CDN (Content Delivery Network)**: All static assets (temple images, UI bundles) and Live Darshan HLS (HTTP Live Streaming) chunks are cached at the edge. 95% of read-heavy traffic never touches our core servers.

### 1.2 Load Balancing & Consistent Hashing
When traffic enters the data center, it hits the **Layer 7 Application Load Balancer**.
- **The Hash Ring**: To scale horizontally, we use **Consistent Hashing** with virtual nodes. User sessions and WebSocket connections are reliably mapped to specific backend nodes. If a server is added or removed during a traffic spike (e.g., Diwali), only a fraction (`1/N`) of connections are re-balanced, preventing a cascading failure or "thundering herd" problem.

### 1.3 Event-Driven Architecture (Kafka/Redpanda)
Synchronous processing causes lag. We transition to an **Event-Sourced system**.
- **Write Aggregation**: During a "Maha Aarti," millions of donations arrive simultaneously. Instead of locking the database, the API gateway immediately returns `202 Accepted` to the user and publishes a `DonationReceived` event to a high-throughput stream.
- **Consumer Groups**: Background workers consume these events in batches, writing them to the database asynchronously. This ensures the UI remains instant, even under massive load.

---

## 2. Backend Architecture (The Business Logic)
*Goal: Execute business rules instantaneously with minimal compute overhead.*

### 2.1 Stateless Edge Computing
All core business logic (Puja booking, AI Muhurat calculation, Sankalp generation) is deployed as **Supabase Edge Functions** (built on Deno).
- **Zero Cold Starts / Rapid Scaling**: Since they are V8 isolates rather than full containers, they spin up in under 5 milliseconds. The system can scale from 10 to 100,000 instances instantly based on traffic.
- **Statelessness**: No session data is stored on the server. Everything is maintained in the JWT (JSON Web Token), meaning any edge node can handle any request perfectly.

### 2.2 Multi-Tier Caching Strategy
The backend employs an extreme caching strategy to avoid database hits.
- **L1 Cache (In-Memory)**: Each Edge Function maintains a small LRU (Least Recently Used) cache for hyper-frequent data.
- **L2 Cache (Distributed Redis)**: Complex AI calculations (e.g., "Muhurat for next Tuesday") are cached in Redis. If another user asks the same question, the response is served in 2ms.

### 2.3 The "Consistent Scraper" Engine
For aggregating data from thousands of temples:
- **Deduplication via Fingerprinting**: Incoming scraped data is hashed (`MD5(Temple+Date+Event)`). Only unique hashes are processed, preventing duplicate UI entries.
- **Proxy Rotation**: Scrapers use residential IP rotation to prevent blocks, ensuring data freshness is never interrupted.

---

## 3. Database System Architecture (The Source of Truth)
*Goal: Prevent table locks, optimize reads, and ensure financial consistency.*

### 3.1 The Hybrid Relational Strategy
Divya uses a "Co-Pilot" database architecture:
- **Supabase (PostgreSQL)**: Handles the "Fast Loop" — Real-time Chat, User Auth, Notifications. It uses PostgreSQL's Logical Replication to push real-time updates directly to the mobile app via WebSockets.
- **Oracle ADW (Autonomous Data Warehouse)**: Handles the "Heavy Lifting" — Spatial queries for nearby temples, massive donation ledgers, and complex analytical views. Connected via ORDS (Oracle REST Data Services).

### 3.2 Sharding, Partitioning & Views
To prevent queries from scanning billions of rows:
- **Time-Series Partitioning**: The `DIVYA_DONATIONS` and `DIVYA_AI_LOGS` tables are partitioned by month. Queries for current data automatically ignore historical partitions.
- **Materialized Views**: Aggregations like "Total Donations for Temple X" are pre-computed continuously. The UI queries this view in 1ms instead of executing a `SUM()` over millions of rows.
- **Spatial Indexing**: Oracle's R-Tree spatial indexes (`MDSYS.SPATIAL_INDEX_V2`) allow the "Temples Near Me" query to execute in under 10ms, even with millions of temples globally.

---

## 4. DevSecOps Architecture (Security & Reliability)
*Goal: Ensure the system cannot be brought down by malicious traffic or bad deployments.*

### 4.1 Zero-Trust & Rate Limiting (WAF)
A lag-free system must block bad traffic at the gate.
- **WAF (Web Application Firewall)**: Inspects incoming packets for SQL injection or DDoS patterns before they hit the API.
- **Token Bucket Rate Limiting**: APIs are strictly rate-limited per user. If a bot tries to scrape our Pandit directory, it is throttled, preserving bandwidth for real devotees.

### 4.2 Escrow & Payment Security
- **HMAC Verification**: All Razorpay webhooks are verified using `crypto.createHmac("sha256", secret)` before any status changes, preventing spoofed payment approvals.
- **Idempotency Keys**: Network failures happen. If a mobile app retries a payment creation request, the system uses an Idempotency Key to ensure the user is never double-charged.

### 4.3 Automated CI/CD & Infrastructure as Code (IaC)
- **Terraform/Pulumi**: The entire architecture (Cloudflare, Supabase, Oracle ADW) is defined in code. If a region goes offline, a new identical environment can be provisioned automatically.
- **Blue/Green Deployments**: When releasing new backend code, traffic is gradually shifted (e.g., 10% -> 50% -> 100%). If latency increases or errors spike, the system automatically rolls back, ensuring users never experience a broken app.

---

## Conclusion
The Divya architecture achieves **Zero-Lag** by pushing static content to the Edge, making API compute stateless and instantly scalable, decoupling heavy database writes via Event Streams, and utilizing aggressive caching and Materialized Views. This 4-pillar approach guarantees that whether 200 or 2,000,000 devotees open the app simultaneously to perform a Live Aarti, their spiritual experience remains uninterrupted and instantaneous.
