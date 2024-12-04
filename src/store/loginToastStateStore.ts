import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface toastToggle {
  isLoginToastShown: boolean;
  setIsLoginToastShown: (isLoginToastShown: boolean) => void;
}

const useLoginToastStateStore = create(
  persist<toastToggle>(
    (set) => ({
      isLoginToastShown: false,
      setIsLoginToastShown: (isLoginToastShown: boolean) => set({ isLoginToastShown }),
    }),
    {
      name: 'toast_toggle',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoginToastStateStore;
