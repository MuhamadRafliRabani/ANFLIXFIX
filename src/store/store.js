import { create } from "zustand";

export const useFilter = create((set) => ({
  filter: {
    Season: null,
    Genres: "none",
    Rating: null,
    Type: null,
    Year: null,
    Status: null,
    Order_by: null,
    Sort: null,
  },
  setFilter: (filterKey, value) =>
    set((state) => ({
      filter: {
        ...state.filter,
        [filterKey]: value,
      },
    })),
}));

export const useContent = create((set) => ({
  content: null,
  setContent: (content) => set(() => ({ content })),
}));
