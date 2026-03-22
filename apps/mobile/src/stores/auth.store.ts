import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

interface AuthState {
  user: any;
  profile: any;
  role: 'devotee' | 'pandit' | 'super_admin' | 'ceo' | null;
  templeId: string | null;
  myTemple: any | null;
  isLoading: boolean;
  languageSelected?: boolean;
  setRole: (role: AuthState['role']) => void;
  loadProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  role: null,
  templeId: null,
  myTemple: null,
  isLoading: false,

  setRole: (role) => set({ role }),

  loadProfile: async () => {
    set({ isLoading: true });
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        set({ user: null, profile: null, isLoading: false });
        return;
      }

      // Sync with Oracle via Edge Function or ORDS
      // For now, mock or placeholder
      set({ user, isLoading: false });
    } catch (error) {
      console.error('Error loading profile:', error);
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, profile: null, role: null, templeId: null, myTemple: null });
  },
}));
