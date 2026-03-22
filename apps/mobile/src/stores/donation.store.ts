import { create } from 'zustand';

interface DonationState {
  drives: any[];
  activeDrive: any | null;
  myDonations: any[];
  isLoading: boolean;
  loadDrives: (templeId: string) => Promise<void>;
  loadDriveDetail: (driveId: string) => Promise<void>;
  donate: (driveId: string, amount: number) => Promise<void>;
}

export const useDonationStore = create<DonationState>((set) => ({
  drives: [],
  activeDrive: null,
  myDonations: [],
  isLoading: false,

  loadDrives: async (templeId) => {
    set({ isLoading: true });
    // Call service
    set({ isLoading: false });
  },

  loadDriveDetail: async (driveId) => {
    set({ isLoading: true });
    // Call service
    set({ isLoading: false });
  },

  donate: async (driveId, amount) => {
    // Call service
  },
}));
