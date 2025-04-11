import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Reset password logic
      navigate('/confirmation');
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Reset your password</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full pl-10 px-3 py-2 border rounded-md shadow-sm text-sm"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 px-3 py-2 border rounded-md shadow-sm text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 text-sm"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
