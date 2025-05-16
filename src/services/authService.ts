import type { RegisterData, ChangePasswordData, LoginResponse } from '../models/Auth';
import { User } from '../models/User';

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

export const registerUser = async (data: RegisterData): Promise<{ message?: string }> => {
  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const changePassword = async (data: ChangePasswordData): Promise<{ message?: string }> => {
  const response = await fetch('/auth/change-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const getUserFromToken = (token: string): User | null => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return User.fromTokenPayload(payload);
  } catch {
    return null;
  }
};
