// src/components/Footer.jsx
import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">VNA Health</span>
          </div>
          <p className="text-gray-300">Your trusted healthcare companion</p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-300 hover:text-blue-400">About Us</Link></li>
            <li><Link to="/doctors" className="text-gray-300 hover:text-blue-400">Find Doctors</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-300 hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <p className="text-gray-300">Follow us on social media</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;