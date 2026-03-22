import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { QRCode } from "https://deno.land/x/qrcode@v2.0.0/mod.ts";

serve(async (req) => {
  try {
    const { booking_id, devotee_name } = await req.json();
    const data = JSON.stringify({ booking_id, devotee_name, encrypted_token: "DIVYA_SECURE_" + Date.now() });
    
    const base64Image = await QRCode.generate(data);
    
    return new Response(JSON.stringify({ qr_code: base64Image }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
