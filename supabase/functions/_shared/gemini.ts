import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory }
  from "https://esm.sh/@google/generative-ai@0.21.0"
import { ordsPost } from "./oracle.ts"

const genAI = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY")!)

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
]

export const flash = genAI.getGenerativeModel({ model:"gemini-2.0-flash", safetySettings })
export const pro   = genAI.getGenerativeModel({ model:"gemini-2.5-pro",   safetySettings })

export async function callGemini(opts: {
  prompt: string
  model?: "flash" | "pro"
  feature: string
  userId?: string
  images?: Array<{ data: string, mimeType: string }>
}) {
  const model = opts.model === "pro" ? pro : flash
  const t0 = Date.now()
  try {
    const parts: any[] = [{ text: opts.prompt }]
    opts.images?.forEach(img => parts.push({ inlineData: img }))
    const result = await model.generateContent(parts)
    const text = result.response.text()
    await ordsPost("/divya_ai_logs/", {
      USER_ID: opts.userId, FEATURE: opts.feature,
      MODEL: opts.model||"flash",
      INPUT_TOKENS: result.response.usageMetadata?.promptTokenCount||0,
      OUTPUT_TOKENS: result.response.usageMetadata?.candidatesTokenCount||0,
      LATENCY_MS: Date.now()-t0, SUCCESS: 1
    })
    return text
  } catch (e: any) {
    await ordsPost("/divya_ai_logs/", {
      USER_ID: opts.userId, FEATURE: opts.feature,
      LATENCY_MS: Date.now()-t0, SUCCESS: 0, ERROR_MSG: e.message
    })
    throw e
  }
}
