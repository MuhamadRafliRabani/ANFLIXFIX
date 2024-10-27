// useUser.js
import { create } from "zustand";

export const useFilter = create((set) => ({
  filter: {},
  setFilter: (items) => set(() => ({ items })),
}));
