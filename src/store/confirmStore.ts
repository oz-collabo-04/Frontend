import { create } from 'zustand';

type ComfirmStore = {
  confirms: {
    [key: string]: boolean;
  };
  openConfirm: (confirmId: string) => void;
  closeConfirm: (confirmId: string) => void;
};

export const useConfirmStore = create<ComfirmStore>((set) => ({
  confirms: {},

  openConfirm: (confirmId: string) =>
    set((state) => ({
      confirms: { ...state.confirms, [confirmId]: true },
    })),

  closeConfirm: (confirmId: string) =>
    set((state) => ({
      confirms: { ...state.confirms, [confirmId]: false },
    })),
}));
