import { useAuthStore } from "@/stores/auth.store";
import { Alert } from "react-native";

let RazorpayCheckout: any;
try {
  RazorpayCheckout = require("react-native-razorpay").default;
} catch (e) {
  // Safe ignore for Expo Go
}


const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;

export function useRazorpayPayment() {
  const { user } = useAuthStore();

  const initiatePayment = async (opts: {
    type: "donation" | "puja";
    amount: number;
    drive_id?: string;
    booking_id?: string;
    description: string;
  }) => {
    // 1. Create order via Edge Function
    const response = await fetch(`${SUPABASE_URL}/functions/v1/create-payment-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: opts.type,
        amount: opts.amount,
        drive_id: opts.drive_id,
        booking_id: opts.booking_id,
        user_id: user?.id
      })
    });

    const order = await response.json();
    if (!response.ok) throw new Error(order.error || "Failed to create order");

    // 2. Open Razorpay Checkout
    const options = {
      description: opts.description,
      image: "https://divya.app/logo.png",
      currency: "INR",
      key: order.key_id,
      amount: order.amount,
      name: "DIVYA Digital Mandir",
      order_id: order.order_id,
      prefill: {
        email: user?.email || "",
        contact: user?.phone || "",
        name: user?.full_name || ""
      },
      theme: { color: "#7E1E1E" } // Maroon
    };

    try {
      if (!RazorpayCheckout) {
        console.warn("Razorpay not available in this environment.");
        Alert.alert("Development Mode", "Payment processing is mocked in Expo Go.");
        return { razorpay_payment_id: "mock_pay_" + Date.now() };
      }

      const success = await RazorpayCheckout.open(options);
      
      // 3. Verify on backend
      const verifyRes = await fetch(`${SUPABASE_URL}/functions/v1/verify-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...success,
          type: opts.type,
          booking_id: opts.booking_id
        })
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.verified) throw new Error("Payment verification failed");

      return success;
    } catch (error: any) {
      throw new Error(error.description || "Payment cancelled or failed");
    }
  };

  return { initiatePayment };
}
