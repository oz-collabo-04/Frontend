import { create } from 'zustand'

interface Estimation {
  amount: string | number;
  description: string;
}

interface CategoryState {
  categories: Record<number, string>;
  estimations: Record<number, Estimation>;
  setCategory: (id: number, category: string) => void;
  getCategory: (id: number) => string;
  setEstimation: (id: number, estimation: Estimation) => void;
  getEstimation: (id: number) => Estimation | undefined;
}

export const useCategoryStore = create<CategoryState>((set, get) => ({
  categories: {},
  estimations: {},
  setCategory: (id: number, category: string) => set((state) => ({ 
    categories: { ...state.categories, [id]: category } 
  })),
  getCategory: (id: number) => get().categories[id] || '',
  setEstimation: (id: number, estimation: Estimation) => set((state) => ({
    estimations: { ...state.estimations, [id]: estimation }
  })),
  getEstimation: (id: number) => get().estimations[id],
}))