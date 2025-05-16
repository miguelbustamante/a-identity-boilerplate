// src/contexts/AuthProvider.tsx
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { User } from '../models/User';
import type { AuthContextType, LoginResponse } from '../models/Auth';
import { loginUser, getUserFromToken } from '../services/authService';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const currentUser = getUserFromToken(token);
      if (currentUser) setUser(currentUser);
    }
  }, []);

  const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await loginUser(username, password);
    if (response.token) {
      localStorage.setItem('token', response.token);
      const currentUser = getUserFromToken(response.token);
      setUser(currentUser);
    }
    return response;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
