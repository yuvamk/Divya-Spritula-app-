import axios from 'axios';
import { supabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;

export const notificationService = {
  registerPushToken: async (token: string, platform: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    await axios.post(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_push_tokens/`, {
      TOKEN: token,
      PLATFORM: platform
    }, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
  },

  getNotifications: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_notifications/`, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data.items;
  },

  // Additional methods...
};
