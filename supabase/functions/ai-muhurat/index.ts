import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { callGemini } from "../_shared/gemini.ts"

serve(async (req) => {
  const { puja_type, nakshatra, rashi, month, year } = await req.json()

  const prompt = `
You are an expert Jyotishi. Calculate the top 5 most auspicious muhurats for
${puja_type} puja in ${month} ${year} for a devotee in ${nakshatra} nakshatra, ${rashi} rashi.

Consider: Tithi, Vara, Nakshatra, Yoga, Karana, Rahu Kaal (avoid),
Gulika Kaal (avoid), Brahma Muhurat (ideal 4:24-5:12 AM).

Return JSON:
{
  "muhurats": [{
    "date": "YYYY-MM-DD",
    "tithi": "...", "nakshatra": "...",
    "time_slot": "morning|afternoon|evening",
    "time_range": "07:30 - 09:00",
    "score": 95,
    "reason": "Guru Pushya Yoga — most auspicious",
    "avoid": false
  }],
  "avoid_dates": ["YYYY-MM-DD"],
  "avoid_reason": "..."
}
`

  const aiResponse = await callGemini({
    prompt,
    model: "pro",
    feature: "ai-muhurat"
  })

  return new Response(aiResponse, { headers: { "Content-Type": "application/json" } })
})
