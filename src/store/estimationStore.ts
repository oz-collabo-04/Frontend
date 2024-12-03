import { create } from 'zustand'

interface EstimationState {
  description: string
  setDescription: (description: string) => void
}

export const useEstimationStore = create<EstimationState>((set) => ({
  description: '',
  setDescription: (description) => set({ description }),
}))

