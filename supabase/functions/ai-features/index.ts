import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.1.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { feature, payload } = await req.json();
    const genAI = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY")!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let systemPrompt = "";
    let userPrompt = "";

    switch (feature) {
      case "divya-bot":
        systemPrompt = "You are DivyaBot, a spiritual AI assistant for the DIVYA platform. Speak in a mix of Hindi and English. Be polite, dharmic, and helpful regarding mandir rituals and platform features.";
        userPrompt = payload.query;
        break;
      
      case "sankalp-assist":
        systemPrompt = "Create a personalized Vedic Sankalp statement in Hindi based on the user's details (Name, Gotra, Rashi, Purpose). Use traditional Sanskrit-Hindi mix.";
        userPrompt = `Details: ${JSON.stringify(payload)}`;
        break;

      case "muhurat-calc":
        systemPrompt = "Based on the date and puja type, suggest 3 highly auspicious muhurats (timings) with their spiritual significance. Return in 1-sentence Hindi summaries.";
        userPrompt = `Date: ${payload.date}, Puja: ${payload.puja}`;
        break;

      case "proof-verifier":
        systemPrompt = "Analyze the provided image/video description of a puja ritual. Determine if it looks authentic and complete. Return a confidence score (0-100) and minor feedback.";
        userPrompt = `Ritual: ${payload.pujaName}, Proof Data: ${payload.description}`;
        break;

      case "fraud-sentry":
        systemPrompt = "Analyze transaction logs for suspicious patterns. Flag high-risk events (sudden spikes, mismatched locations). Return a risk score and reason.";
        userPrompt = `History: ${JSON.stringify(payload.history)}`;
        break;

      case "temple-health":
        systemPrompt = "Calculate a Temple Spiritual Health Score (1-100) based on metrics like devotee engagement, ritual consistency, and transparency. Provide a 1-sentence encouragement.";
        userPrompt = `Metrics: ${JSON.stringify(payload.metrics)}`;
        break;

      case "voice-guide":
        systemPrompt = "Act as an AI Voice Priest. Provide step-by-step instructions for the specific puja step. Keep it clear, slow, and include the relevant mantra.";
        userPrompt = `Step: ${payload.stepName}, Puja: ${payload.pujaName}`;
        break;

      default:
        return new Response(JSON.stringify({ error: "Feature not implemented" }), { 
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
    }

    const result = await model.generateContent([systemPrompt, userPrompt]);
    const responseText = result.response.text();

    return new Response(JSON.stringify({ result: responseText }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
