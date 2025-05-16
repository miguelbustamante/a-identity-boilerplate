export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the Auth Boilerplate</h1>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md space-y-6">
        <p className="text-lg leading-relaxed">
          This is a starter authentication boilerplate using React, TypeScript, and Tailwind CSS.
          <br />
          Use the navigation bar above to login or register.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Setup Instructions</h2>
          <p className="mb-4">
            To connect this app with your backend, update <code className="bg-gray-100 px-1 py-0.5 rounded">src/models/Auth.ts</code> with the correct API endpoints and response types.
          </p>

          <h3 className="font-semibold underline mb-2">Expected API endpoints:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><code>/api/login</code> — POST to login and get a JWT token</li>
            <li><code>/api/register</code> — POST to create a new user</li>
            <li><code>/api/logout</code> — POST to log out the user</li>
            <li><code>/api/change-password</code> — POST to update the user password</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">TypeScript types to update or verify</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
{`import { User } from '../models/User';

export interface LoginResponse {
  token?: string;
  message?: string;
}

export interface AuthContextType {
  user: User | null; // currently logged-in user, or null
  login: (username: string, password: string) => Promise<LoginResponse>;
  logout: () => void;
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
}`}
          </pre>
        </div>

        <p className="text-sm text-gray-600 italic">
          Remember to keep your backend API aligned with these types for smooth integration.
        </p>
      </section>
    </>
  );
}
