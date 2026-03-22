import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { callGemini } from "../_shared/gemini.ts"
import { ordsGet, ordsPost } from "../_shared/oracle.ts"

serve(async (req) => {
  const { prompt, history, temple_id, user_name, deity, current_tithi, active_drives, recent_pujas } = await req.json()
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: req.headers.get("Authorization")! } } })
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response("Unauthorized", { status: 401 })

  const systemPrompt = `
You are DivyaBot, the AI spiritual guide of Divya Digital Mandir Platform.
You are wise, compassionate, deeply knowledgeable about Hindu dharma, rituals,
festivals, mantras, and traditions across all Hindu sampradayas.
Speak primarily in Hindi (Devanagari). Switch to English only when asked.
Respond with reverence and warmth. You can help with:
- Recommending the right puja for any life situation
- Explaining tithis, nakshatras, and festivals
- Guiding devotees on home puja performance
- Suggesting mantras for different purposes
- Explaining temple traditions
- Helping choose auspicious donation amounts (21, 51, 101, 501, 1001, 11000 are sacred)
- Booking recommendations based on the devotee's sankalp

Context: ${user_name}, Member of ${temple_id}, Today: ${current_tithi}
Active drives: ${JSON.stringify(active_drives)}
Recent pujas: ${JSON.stringify(recent_pujas)}

Always end with "Jai Shri ${deity || 'Ram'}! 🙏"
Only discuss Hindu spirituality and the Divya platform.
`

  // Format history for Gemini
  // ... (implementation of multi-turn logic)

  const aiResponse = await callGemini({
    prompt: `${systemPrompt}\n\nUser: ${prompt}`,
    feature: "divya-bot",
    userId: user.id
  })

  // Store in Oracle DIVYA_CHATBOT_SESSIONS
  await ordsPost("/divya_chatbot_sessions/", {
    USER_ID: user.id,
    MESSAGES: JSON.stringify([...(history || []), { role: "user", content: prompt }, { role: "assistant", content: aiResponse }])
  })

  return new Response(JSON.stringify({ response: aiResponse }), { headers: { "Content-Type": "application/json" } })
})
