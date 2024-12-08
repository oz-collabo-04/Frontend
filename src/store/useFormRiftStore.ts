import { create } from 'zustand';

export interface IReviewImg {
  id?: number;
  review?: number;
  file: File;
}

interface IFormState {
  formRating: number;
  reviewImages: IReviewImg[];
  setFormRating: (rating: number) => void;
  addReviewImage: (image: IReviewImg) => void;
  removeReviewImage: (id: number) => void;
}

export const useFormRiftStore = create<IFormState>((set) => ({
  formRating: 0,
  reviewImages: [],
  setFormRating: (rating) => set({ formRating: rating }),
  addReviewImage: (image) => set((state) => ({ reviewImages: [...state.reviewImages, image] })),
  removeReviewImage: (id) =>
    set((state) => ({
      reviewImages: state.reviewImages.filter((img) => img.id !== id),
    })),
}));
