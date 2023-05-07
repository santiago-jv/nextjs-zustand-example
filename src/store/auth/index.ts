import { create } from "zustand";
import { AuthActions, AuthStore } from "./auth-store.interface";
import { login } from "./auth.actions";
import { LoginRequest } from "@/api/requests/login.request";

const useAuthStore = create<AuthStore & AuthActions>((set) => ({
  user: null,
  login: async (data: LoginRequest) => {
    set({
      user: await login(data),
    });
  },
  logout: () => set(() => ({ user: null, token: null })),
}));

export default useAuthStore;
