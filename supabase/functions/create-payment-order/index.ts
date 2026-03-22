import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Razorpay from "npm:razorpay";

const razorpay = new Razorpay({
  key_id: Deno.env.get("RAZORPAY_KEY_ID") || "",
  key_secret: Deno.env.get("RAZORPAY_KEY_SECRET") || "",
});

serve(async (req) => {
  try {
    const { amount, currency = "INR", receipt } = await req.json();

    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify(order), {
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
