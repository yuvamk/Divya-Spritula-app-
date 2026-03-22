import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { callGemini } from "../_shared/gemini.ts"

serve(async (req) => {
  const { name, gotra, puja_type, purpose, wish_text, nakshatra } = await req.json()

  const prompt = `
A devotee named ${name} from ${gotra} gotra wants to perform ${puja_type}.
Their wish: "${wish_text}". Purpose: ${purpose}. Nakshatra: ${nakshatra}.

1. Recommend the most appropriate puja from: [Satyanarayan Katha, Rudrabhishek,
   Sundarkand Path, Navgrah Shanti, Mahamrityunjaya Jaap, Lakshmi Puja,
   Ganesh Puja, Hanuman Puja, Durga Puja, Vishnu Sahasranam]
2. Suggest 1-2 mantras to include
3. Write a proper sankalp statement in Sanskrit/Hindi
4. Suggest an auspicious donation amount (from: 21,51,101,251,501,1001,1100,2100,5100,11000)

Return JSON only:
{
  "recommended_puja": "...",
  "mantras": ["..."],
  "sankalp_statement": "...",
  "suggested_donation": 501,
  "reason": "..."
}
`

  const aiResponse = await callGemini({
    prompt,
    feature: "ai-sankalp-assist"
  })

  return new Response(aiResponse, { headers: { "Content-Type": "application/json" } })
})
