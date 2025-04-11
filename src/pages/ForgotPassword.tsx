import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | ''>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Simulate API call (replace this with your real fetch/axios logic)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

      // On success
      setMessage('📧 Reset link sent to your email!');
      setType('success');

      setTimeout(() => {
        navigate('/reset-password');
      }, 5000); // navigate after 5 seconds
    } catch (err) {
      // On error
      setMessage('❌ Failed to send reset link. Please try again.');
      setType('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Forgot password?</h2>
        <p className="text-center text-sm text-gray-600">
          Enter your email to receive a reset link.
        </p>

        {message && (
          <div
            className={`text-sm px-4 py-2 rounded-md ${
              type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 px-3 py-2 border rounded-md shadow-sm text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 text-sm"
          >
            Send reset link
          </button>
        </form>

        <div className="text-sm text-center">
          <Link to="/signin" className="text-indigo-600 hover:underline">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
