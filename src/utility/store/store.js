// useUser.js
import { create } from "zustand";

export const useUser = create((set) => ({
  user: {},
  setUser: (user) => set(() => ({ user })),
}));

export const useCollecSucsess = create((set) => ({
  collectSucsess: false,
  setCollectSucsess: (collectSucsess) => set(() => ({ collectSucsess })),
}));

export const usePath = create((set) => ({
  path: "/top/anime",
  setPath: (path) => set(() => ({ path })),
}));

export const useType = create((set) => ({
  type: "Trend Up",
  setType: (type) => set(() => ({ type })),
}));
