import { useState } from 'react';
import { registerUser } from '../services/authService';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;
    await registerUser({ ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="username" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone (optional)" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}