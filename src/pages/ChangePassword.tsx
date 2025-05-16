import { useState } from 'react';
import { changePassword } from '../services/authService';

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmNewPassword) return;
    await changePassword({ ...form });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="currentPassword" type="password" placeholder="Current Password" onChange={handleChange} />
      <input name="newPassword" type="password" placeholder="New Password" onChange={handleChange} />
      <input name="confirmNewPassword" type="password" placeholder="Confirm New Password" onChange={handleChange} />
      <button type="submit">Change Password</button>
    </form>
  );
}
