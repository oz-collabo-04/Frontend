import { create } from 'zustand';

type ModalState = {
  modals: {
    [key: string]: boolean;
  };
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modals: {},
  openModal: (modalId: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),
  closeModal: (modalId: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: false },
    })),
}));
