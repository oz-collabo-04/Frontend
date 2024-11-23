import { Expert } from '@/config/types';
import { create } from 'zustand';

interface ExpertStore {
  expert: Expert;
  setExpert: (newExpertData: Partial<Expert>) => void;
  unSetExpert: () => void;
}

export const useExpertStore = create<ExpertStore>((set) => ({
  expert: {
    id: '0',
    user: {
      id: '0',
      name: '',
      gender: '',
    },
    available_location: [],
    appeal: '',
    service: '',
    careers: [],
    expert_image: '',
  },

  setExpert: (newExpertData) =>
    set((state) => ({
      expert: { ...state.expert, ...newExpertData },
    })),

  unSetExpert: () =>
    set({
      expert: {
        id: '0',
        user: {
          id: '0',
          name: '',
          gender: '',
        },
        available_location: [],
        appeal: '',
        service: '',
        careers: [],
        expert_image: '',
      },
    }),
}));
