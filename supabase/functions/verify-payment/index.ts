import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createHmac } from "node:crypto";

serve(async (req) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
    const secret = Deno.env.get("RAZORPAY_KEY_SECRET") || "";

    const generated_signature = createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      return new Response(JSON.stringify({ status: "success" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ status: "failure" }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
