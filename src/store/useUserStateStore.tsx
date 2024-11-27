import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserState {
  isLoggedIn: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
  isExpert: true | false | null;
  setIsExpert?: (userType: true | false | null) => void;
  name: string | null;
  setName?: (name: string | null) => void;
}

// const useUserStateStore = create<UserState>((set) => ({
//   isLoggedIn: false,
//   isExpert: null,
//   name: null,
//   userProfileImage: null,
//   setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
//   setIsExpert: (isExpert) => set({ isExpert }),
//   setName: (name) => set({ name }),
// }));

const useUserStateStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      isExpert: null,
      name: null,
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
      setIsExpert: (isExpert) => set({ isExpert }),
      setName: (name) => set({ name }),
    }),
    {
      name: 'user_state', // localStorage에 저장될 키 이름
      storage: createJSONStorage(() => localStorage), // localStorage를 사용하도록 지정
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        isExpert: state.isExpert,
        name: state.name,
      }),
    }
  )
);

export default useUserStateStore;
