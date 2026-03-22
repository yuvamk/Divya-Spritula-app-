import axios from 'axios';
import { supabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;

export const templeService = {
  getTempleByQRToken: async (token: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_temples/&q={"QR_TOKEN":"${token}"}`, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data.items?.[0];
  },

  joinTemple: async (templeId: string, userData: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/join-temple`, {
      temple_id: templeId,
      ...userData
    }, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data;
  },
  
  // Additional methods...
};
