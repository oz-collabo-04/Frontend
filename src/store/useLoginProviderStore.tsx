import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ProviderProps {
  provider: 'naver' | 'kakao' | 'google' | null;
  setProvider: (provider: 'naver' | 'kakao' | 'google' | null) => void;
}

const useLoginProviderStore = create(
  persist<ProviderProps>(
    (set) => ({
      provider: null,
      setProvider: (provider) => set({ provider }),
    }),
    {
      name: 'login_Provider', // sessionStorage에 저장될 키 이름
      storage: createJSONStorage(() => sessionStorage), // sessionStorage를 사용하도록 지정
    }
  )
);

export default useLoginProviderStore;
