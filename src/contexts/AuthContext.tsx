// src/contexts/AuthContext.tsx
import { createContext } from 'react';
import type { AuthContextType } from '../models/Auth';

export const AuthContext = createContext<AuthContextType | null>(null);
