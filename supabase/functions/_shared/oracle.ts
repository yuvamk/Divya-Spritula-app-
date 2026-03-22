// Supabase Edge Functions call Oracle via ORDS REST API
const ORDS_BASE = Deno.env.get("ORACLE_ORDS_BASE_URL")!  // https://atp.divya.app/ords/divya

export async function ordsGet(path: string, params?: Record<string,string>) {
  const url = new URL(`${ORDS_BASE}${path}`)
  if (params) Object.entries(params).forEach(([k,v]) => url.searchParams.set(k,v))
  const res = await fetch(url.toString(), {
    headers: { "Authorization": `Basic ${btoa(`${Deno.env.get("ORACLE_ORDS_USER")}:${Deno.env.get("ORACLE_ORDS_PASSWORD")}`)}` }
  })
  return res.json()
}

export async function ordsPost(path: string, body: object) {
  const res = await fetch(`${ORDS_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${btoa(`${Deno.env.get("ORACLE_ORDS_USER")}:${Deno.env.get("ORACLE_ORDS_PASSWORD")}`)}`
    },
    body: JSON.stringify(body)
  })
  return res.json()
}
