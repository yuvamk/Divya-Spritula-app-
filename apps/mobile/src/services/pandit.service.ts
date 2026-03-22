import axios from 'axios';
import { supabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;

export const panditService = {
  searchPandits: async (filters: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_pandit_profiles/`, {
      params: filters,
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data.items;
  },

  getPanditProfile: async (id: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_pandit_profiles/${id}`, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data;
  },

  // Additional methods...
};
