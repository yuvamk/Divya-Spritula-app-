# 🕉️ Divya - The Digital Mandir Platform

Welcome to **Divya**, the world's most advanced, zero-lag Digital Mandir ecosystem. Divya is designed to bridge the gap between ancient spiritual traditions and modern, hyper-scalable cloud technology, allowing billions of devotees to connect with their faith instantly from anywhere in the world.

## 🌟 What Does Divya Do?

Divya is a comprehensive, multi-sided platform built for Devotees, Pandits, and Temple Administrators. 

- **Live Darshan & Global Maha Aarti**: Streams 4K live video directly from temples to devotees worldwide using a P2P-assisted mesh network to minimize bandwidth costs.
- **Remote Puja Booking**: Devotees can book verified Pandits for specific remote or home pujas (e.g., Rudrabhishek, Satyanarayan Katha).
- **AI-Powered Sankalp Assist**: Uses Google Gemini to take a devotee's simple intent ("Health for my parents") and generate a grammatically perfect, personalized Sanskrit/Hindi Sankalp.
- **DivyaBot**: A context-aware spiritual AI guide that advises devotees on Muhurats, festivals, and dharma based on their selected deity and temple.
- **Transparent Donation Ledgers**: A dual-database escrow system that ensures every ₹11 donated goes exactly where intended, with AI verifying "Puja Proof" videos before funds are released.
- **High-Concurrency Scraping Engine**: Automatically and reliably aggregates panchang (lunar calendar) and festival data from thousands of sources using consistent hashing and proxy rotation.

## 🏗️ The "Zero-Lag" Architecture

Divya is built by Systems, Backend, and Database Architects to handle massive spikes in traffic (like during Diwali or Kumbh Mela) without ever making the user wait for a database lock. To learn exactly how this is achieved, please refer to the deep-dive architectural documents located in the `architecture_docs/` folder:

### 📖 The Master Engineering Manual
- [**The Divya Engineering Manual**](./architecture_docs/divya_comprehensive_engineering_manual.md)  
  *A textbook-style guide to building the platform from scratch, detailing code snippets, Deno Edge Functions, and Oracle Spatial queries.*

### 🏛️ High-Level System Architecture
- [**Master Architecture Blueprint**](./architecture_docs/divya_master_architecture_blueprint.md)  
  *The grand synthesis of UI/UX, Backend, Database, and DevSecOps strategies for a zero-lag experience.*
- [**Comprehensive Architecture Report**](./architecture_docs/divya_master_architecture_report.md)  
  *A professional PDF-ready breakdown of the hybrid cloud infrastructure.*

### 🚀 Scaling & Algorithms Deep-Dives
- [**Next-Level Scaling (Hyper-Scale)**](./architecture_docs/next_level_scaling_blueprint.md)  
  *How to use Write Aggregation (Kafka) and Consensus algorithms to scale to billions of users.*
- [**Consistent Hashing Explained**](./architecture_docs/consistent_hashing.md)  
  *The "Hash Ring" secret to balancing load perfectly across massive server clusters.*
- [**Scaling and Efficiency Guide**](./architecture_docs/scaling_and_efficiency.md)  
  *Scaling down to save money for 200 users, and scaling up for 1 Billion users using Connection Pooling and Edge deployment.*
- [**Consistent Scraping Architecture**](./architecture_docs/consistent_scraping.md)  
  *How array deduplication, headless browsers, and AI normalization organize chaotic temple data.*

---

## 🛠️ Tech Stack Highlights
- **Mobile Client**: React Native / Expo (Optimistic UI, Zustand)
- **Backend**: Supabase (PostgreSQL + Deno Edge Functions)
- **Heavy Database**: Oracle Autonomous Data Warehouse (ADW) + Oracle Spatial
- **AI Core**: Google Gemini 1.5 Flash
- **Payments**: Razorpay with Custom Verification Escrow
