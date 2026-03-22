import axios from 'axios';
import { supabase } from '@/lib/supabase';
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;

const getAuthHeader = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return { Authorization: `Bearer ${session?.access_token}` };
};

export const aiService = {
  // 1. DivyaBot Chat
  callDivyaBot: async (prompt: string, history: any[]) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/divya-bot`, { prompt, history }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 2. Sankalp Assist
  getSankalpAssist: async (data: any) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-sankalp-assist`, data, { headers: await getAuthHeader() });
    return res.data;
  },

  // 3. Muhurat Calculator
  getMuhurat: async (location: string, date: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-muhurat`, { location, date }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 4. Voice Puja Guide
  getPujaGuide: async (pujaType: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-puja-guide`, { pujaType }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 5. Proof Verification
  verifyProof: async (bookingId: string, imageUri: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-verify-proof`, { bookingId, imageUri }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 6. Pandit Matching
  matchPandit: async (criteria: any) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-pandit-match`, criteria, { headers: await getAuthHeader() });
    return res.data;
  },

  // 7. Temple Health Score
  getTempleHealth: async (templeId: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-temple-health`, { templeId }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 8. Fraud Detection
  checkFraud: async (transactionData: any) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-fraud-detector`, transactionData, { headers: await getAuthHeader() });
    return res.data;
  },

  // 9. Smart Notifications
  getSmartNotify: async (userId: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-smart-notify`, { userId }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 10. Drive Context Writer
  getDriveContext: async (templeId: string, cause: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-drive-writer`, { templeId, cause }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 11. Review Summarizer
  summarizeReviews: async (entityId: string, type: 'temple' | 'pandit') => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-review-summary`, { entityId, type }, { headers: await getAuthHeader() });
    return res.data;
  },

  // 12. Daily Shloka
  getDailyShloka: async (userPreference: string) => {
    const res = await axios.post(`${SUPABASE_URL}/functions/v1/ai-daily-shloka`, { userPreference }, { headers: await getAuthHeader() });
    return res.data;
  }
};
