import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ModeChangerProps {
  mode: 'guest' | 'user' | 'expert';
  setMode?: (mode: 'guest' | 'user' | 'expert') => void;
}

const useModeChangerStore = create(
  persist<ModeChangerProps>(
    (set) => ({
      mode: 'guest',
      setMode: (mode) => set({ mode }),
    }),
    {
      name: 'mode',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        mode: state.mode,
      }),
    }
  )
);

export default useModeChangerStore;
