import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserState {
  isLoggedIn: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
  isExpert: true | false | null;
  setIsExpert?: (isExpert: true | false | null) => void;
  userName: string | null;
  setUserName?: (name: string | null) => void;
}

const useUserStateStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      isExpert: null,
      userName: null,
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
      setIsExpert: (isExpert) => set({ isExpert }),
      setUserName: (userName) => set({ userName }),
    }),
    {
      name: 'user_state', // sessionStorage에 저장될 키 이름
      storage: createJSONStorage(() => sessionStorage), // sessionStorage를 사용하도록 지정
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        isExpert: state.isExpert,
        userName: state.userName,
      }),
    }
  )
);

export default useUserStateStore;
