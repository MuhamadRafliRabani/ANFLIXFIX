import { create } from "zustand";

export const useFilter = create((set) => ({
  filter: {
    Season: null,
    Genres: null,
    Rating: null,
    Type: null,
    Year: null,
    Status: null,
    Order_by: null,
    Sort: null,
  },
  setFilter: (filterKey, value) =>
    set((state) => {
      if (filterKey in state.filter) {
        return {
          filter: {
            ...state.filter,
            [filterKey]: value,
          },
        };
      } else {
        console.error(
          `Filter key "${filterKey}" tidak ditemukan di state filter.`,
        );
        return state; // Tidak ada perubahan
      }
    }),
  resetFilter: (newFilter) =>
    set(() => ({
      filter: {
        ...newFilter,
      },
    })),
}));

export const useContent = create((set) => ({
  content: "Overview",
  setContent: (content) => set(() => ({ content })),
}));

export const usePage = create((set) => ({
  page: 1,
  setPage: (page) => set(() => ({ page })),
}));
