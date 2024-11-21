import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

interface ProviderProps {
  provider: 'naver' | 'kakao' | 'google' | null;
  setProvider: (provider: 'naver' | 'kakao' | 'google' | null) => void;
}

const localStorageWrapper: PersistStorage<ProviderProps> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
}; //오류 안나게 타입 지정

const useLoginProviderStore = create(
  persist<ProviderProps>(
    (set) => ({
      provider: null,
      setProvider: (provider) => set({ provider }),
    }),
    {
      name: 'login-provider', // localStorage에 저장될 키 이름
      storage: localStorageWrapper, // localStorage를 사용하도록 지정
    }
  )
);

export default useLoginProviderStore;
