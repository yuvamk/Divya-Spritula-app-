import axios from 'axios';
import { supabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;

export const pujaService = {
  searchPujaServices: async (filters: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_puja_services/`, {
      params: filters,
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data.items;
  },

  createBooking: async (bookingData: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_puja_bookings/`, bookingData, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data;
  },

  // Additional methods...
};
