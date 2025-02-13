// src/components/Header.jsx
import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Activity className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold text-white">VNA Health</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/doctors" className="text-gray-300 hover:text-blue-400 transition-colors">Find Doctors</Link>
        <Link to="/chatbot" className="text-gray-300 hover:text-blue-400 transition-colors">Chatbot</Link>
        <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link>
        <Link to="/auth">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Login / Register
          </button>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;