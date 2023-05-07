export interface LoginResponse {
  accessToken: string;
  type: string;
  user: UserResponse;
}
interface UserResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}
