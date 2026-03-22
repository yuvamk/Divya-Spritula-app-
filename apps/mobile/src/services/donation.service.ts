import axios from 'axios';
import { supabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;

export const donationService = {
  getDrives: async (templeId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_donation_drives/&q={"TEMPLE_ID":"${templeId}"}`, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data.items;
  },

  getDriveDetail: async (driveId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await axios.get(`${SUPABASE_URL}/functions/v1/ords-proxy?path=/divya_donation_drives/${driveId}`, {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    return res.data;
  },

  // Additional methods...
};
