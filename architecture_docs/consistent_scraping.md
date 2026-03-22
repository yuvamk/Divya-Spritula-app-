# Consistent Scraping: The "Reliable Data Collector" Pattern

In a platform like Divya, we need data from thousands of temples, lunar calendars (Panchang), and festival lists. "Consistent Scraping" means the data is always **Fresh**, **Unique**, and **Error-Free**.

## 1. The Deduplication Engine (The "No Duplicates" Rule)
The biggest challenge in scraping is getting the same data 10 times.
- **Problem**: If we scrape 5 different websites for "Kashi Vishwanath Aarti Timings," we might get 5 slightly different versions.
- **Practical Solution**: **Fingerprinting**.
- **Example**: 
  - We create a unique "Hash" for every record: `MD5(temple_name + date + aarti_type)`.
  - Before inserting into the database, we check: `IF NOT EXISTS (SELECT 1 FROM temple_data WHERE hash = :new_hash)`.
  - This ensures that even if our scraper runs every 5 minutes, the devotee only sees **one** accurate record.

## 2. Proxy Rotation & Anti-Blocking (The "Ghost" Mode)
Websites don't like being scraped by the same IP address 1 million times.
- **Problem**: The target website blocks our server IP.
- **Practical Solution**: **Residential Proxy Rotation**.
- **Example**: 
  - Every request uses a different "Identity" (User-Agent) and a different "Location" (IP).
  - One request looks like it's from a Chrome browser in Delhi; the next looks like a Safari browser in Bangalore.
  - This keeps the scraping "Consistent" because we never get blocked.

## 3. Data Normalization (The "Common Language" Rule)
Different temples list data differently.
- **Temple A**: "Morning Aarti - 6:00 AM"
- **Temple B**: "Pratah Kaal Puja: 06:00"
- **The Solution**: **AI-Powered Normalization**.
- **Example**:
  - We pass the "Raw Scraped Text" to a small **Gemini Flash** model.
  - The AI converts "Pratah Kaal Puja: 06:00" into a standard JSON: `{"type": "Aarti", "time": "06:00:00", "label": "Morning"}`.
  - This keeps the data "Consistent" across the entire app.

## 4. The "Health Check" & Retry Logic
What happens if the target website goes down?
- **Practical Solution**: **Exponential Backoff**.
- **Example**:
  - If a scrape fails, we don't just stop. We wait 1 minute, then 5 minutes, then 30 minutes.
  - If it fails 5 times, we log an entry in `DIVYA_AI_LOGS` with `SUCCESS = 0` and send a "Smart Notification" to the Admin.

## Summary: How to Build a Professional Scraper
1. **Queue-Based**: Don't scrape all at once. Use a queue (like BullMQ or RabbitMQ) to scrape one-by-one.
2. **Headless Browsers**: Use **Puppeteer** or **Playwright** only when necessary (for Javascript-heavy sites), as they use more resources.
3. **Storage**: Store the "Raw HTML" once. If the parsing logic changes later, you can re-parse the old data without re-scraping.
