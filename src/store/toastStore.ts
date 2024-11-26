import { Toast } from '@/config/types';
import { create } from 'zustand';

interface ToastStore {
  toasts: Toast[];
  addToasts: (newToast: Toast) => void;
  removeToasts: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],

  addToasts: (newToast) => {
    const { toasts } = get();

    if (toasts.length === 0) {
      set((state) => ({
        toasts: [...state.toasts, newToast],
      }));
    }
  },

  removeToasts: (id) =>
    set((prevToast) => ({
      toasts: prevToast.toasts.filter((toast) => toast.id !== id),
    })),
}));
