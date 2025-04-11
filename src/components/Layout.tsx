import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, MessageSquare, Users } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Rocket className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Learn Loop</span>
              </Link>
              <div className="hidden md:flex md:ml-10 space-x-8">
                <Link to="/projects" className={`${location.pathname === '/projects' ? 'text-indigo-600' : 'text-gray-500'} hover:text-indigo-600 px-3 py-2 text-sm font-medium`}>Projects</Link>
                <Link to="/mentorship" className={`${location.pathname === '/mentorship' ? 'text-indigo-600' : 'text-gray-500'} hover:text-indigo-600 px-3 py-2 text-sm font-medium`}>Mentorship</Link>
                <Link to="/teams" className={`${location.pathname === '/teams' ? 'text-indigo-600' : 'text-gray-500'} hover:text-indigo-600 px-3 py-2 text-sm font-medium`}>Teams</Link>
                <Link to="/pricing" className={`${location.pathname === '/pricing' ? 'text-indigo-600' : 'text-gray-500'} hover:text-indigo-600 px-3 py-2 text-sm font-medium`}>Pricing</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign In</Link>
              <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Join Loop</Link>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/projects" className="text-base text-gray-500 hover:text-gray-900">Browse Projects</Link></li>
                <li><Link to="/mentorship" className="text-base text-gray-500 hover:text-gray-900">Find Mentors</Link></li>
                <li><Link to="/teams" className="text-base text-gray-500 hover:text-gray-900">Join Teams</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
                <li><Link to="/guides" className="text-base text-gray-500 hover:text-gray-900">Guides</Link></li>
                <li><Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
                <li><Link to="/careers" className="text-base text-gray-500 hover:text-gray-900">Careers</Link></li>
                <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link></li>
                <li><Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex justify-center space-x-6">
              <MessageSquare className="h-6 w-6 text-gray-400 hover:text-gray-500" />
              <Users className="h-6 w-6 text-gray-400 hover:text-gray-500" />
              <Rocket className="h-6 w-6 text-gray-400 hover:text-gray-500" />
            </div>
            <div className="mt-8 text-center">
              <p className="text-base text-gray-400">&copy; 2024 Learn Loop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}