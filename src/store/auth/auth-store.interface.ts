import { LoginRequest } from "@/api/requests/login.request";
import { User } from "@/models/user.model";

export interface AuthStore {
  user: User | null;
}

export interface AuthActions {
  login: (data: LoginRequest) => Promise<void>;
  logout: () => void;
}
