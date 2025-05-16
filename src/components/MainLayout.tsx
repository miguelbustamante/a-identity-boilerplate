import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-[#001F36] shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl text-white">Auth Boilerplate</div>
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
              <Link to="/login" className="text-white hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-white hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex-grow w-full p-6">
        {children}
      </main>
    </div>
  );
}
