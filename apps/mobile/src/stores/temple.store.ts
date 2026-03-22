import { create } from 'zustand';

interface TempleState {
  currentTemple: any | null;
  members: any[];
  membersLoading: boolean;
  memberFilters: any;
  loadTemple: (id: string) => Promise<void>;
  loadMembers: (filters: any) => Promise<void>;
  setMemberFilter: (filter: any) => void;
}

export const useTempleStore = create<TempleState>((set) => ({
  currentTemple: null,
  members: [],
  membersLoading: false,
  memberFilters: {},

  loadTemple: async (id) => {
    // Call service
  },

  loadMembers: async (filters) => {
    set({ membersLoading: true });
    // Call service
    set({ membersLoading: false });
  },

  setMemberFilter: (filter) => set((state) => ({ memberFilters: { ...state.memberFilters, ...filter } })),
}));
