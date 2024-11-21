import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  userType: 'expert' | 'user' | null;
  setUserType: (userType: 'expert' | 'user' | null) => void;
}

const useUserStateStore = create<UserState>((set) => ({
  isLoggedIn: false,
  userType: null,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setUserType: (userType) => set({ userType }),
}));

export default useUserStateStore;
