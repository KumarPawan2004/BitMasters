import React from 'react';
import { Link } from 'react-router-dom';

export function SuccessConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">🎉 Password reset successful!</h2>
        <p className="text-sm text-gray-600">You can now log in with your new password.</p>
        <Link
          to="/signin"
          className="inline-block mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md text-sm hover:bg-indigo-700"
        >
          Go to Sign In
        </Link>
      </div>
    </div>
  );
}
