// src/components/MainLayout.tsx
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Auth Boilerplate</div>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="font-medium text-gray-700">Hello, {user.username}</span>
              <Link to="/dashboard" className="text-blue-600 hover:underline">
                Dashboard
              </Link>
              <Link to="/change-password" className="text-blue-600 hover:underline">
                Change Password
              </Link>
              <button
                onClick={logout}
                className="text-red-600 hover:underline"
                type="button"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-6">{children}</main>
    </div>
  );
}
