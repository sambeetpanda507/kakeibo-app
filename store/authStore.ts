import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  setIsAuth: (isAuth: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  isLoading: false,
  setIsAuth: (isAuth) => set({ isAuth }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
