import { create } from 'zustand';

interface BookingState {
  myBookings: any[];
  activeBooking: any | null;
  pandits: any[];
  isLoading: boolean;
  sankalp: any; // Persisted form
  loadBookings: () => Promise<void>;
  loadBookingDetail: (id: string) => Promise<void>;
  createBooking: (data: any) => Promise<void>;
  confirmDelivery: (id: string) => Promise<void>;
}

export const useBookingStore = create<BookingState>((set) => ({
  myBookings: [],
  activeBooking: null,
  pandits: [],
  isLoading: false,
  sankalp: {},

  loadBookings: async () => {
    set({ isLoading: true });
    // Call service
    set({ isLoading: false });
  },

  loadBookingDetail: async (id) => {
    set({ isLoading: true });
    // Call service
    set({ isLoading: false });
  },

  createBooking: async (data) => {
    // Call service
  },

  confirmDelivery: async (id) => {
    // Call service
  },
}));
