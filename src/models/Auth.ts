import { User } from '../models/User';

export interface LoginResponse {
  token?: string;
  message?: string;
}


export interface AuthContextType {
  user: User | null; // the currently logged-in user, or null if none
  login: (username: string, password: string) => Promise<LoginResponse>; // function to log in
  logout: () => void; // function to log out
}


export interface RegisterData {
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
