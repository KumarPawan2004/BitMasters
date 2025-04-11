import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth if needed
    navigate('/signin');
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-6 flex flex-col space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="flex flex-col space-y-4">
          <button className="text-left hover:bg-indigo-600 p-2 rounded">🏠 Home</button>
          <button className="text-left hover:bg-indigo-600 p-2 rounded">📊 Analytics</button>
          <button className="text-left hover:bg-indigo-600 p-2 rounded">⚙️ Settings</button>
        </nav>
        <button
          className="mt-auto flex items-center space-x-2 hover:text-red-300"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-10">
        <h2 className="text-3xl font-semibold mb-4">Welcome to your dashboard 👋</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-2xl mt-2 font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-2xl mt-2 font-bold">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Performance</h3>
            <p className="text-2xl mt-2 font-bold">98%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
