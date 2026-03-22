import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
);

serve(async (req) => {
  try {
    const { booking_id, is_satisfied } = await req.json();

    if (!is_satisfied) {
      // Logic for dispute/refund
      return new Response(JSON.stringify({ status: "dispute_initiated" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Release funds from escrow to Pandit
    const { data, error } = await supabase
      .from("bookings")
      .update({ payment_status: "released" })
      .eq("id", booking_id)
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({ status: "escrow_released", data }), {
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
