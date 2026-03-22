import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

let storage: any = {
  set: () => {},
  getString: () => null,
  delete: () => {},
};

try {
  const { MMKV } = require('react-native-mmkv');
  storage = new MMKV();
} catch (e) {
  console.warn('MMKV not available in this environment (likely Expo Go). Using empty fallback storage.');
}

const mmkvStorage = {
  setItem: (name: string, value: string) => {
    storage.set?.(name, value);
  },
  getItem: (name: string) => {
    return storage.getString?.(name) ?? null;
  },
  removeItem: (name: string) => {
    storage.delete?.(name);
  },
};


interface UIState {
  theme: 'light' | 'dark' | 'system';
  language: string;
  fontSize: number;
  setTheme: (theme: UIState['theme']) => void;
  setLanguage: (language: string) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'hi',
      fontSize: 14,
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
