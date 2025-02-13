import React from "react";
import { Timeline } from "./ui/timeline";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Activity,
  Bell,
  Calendar,
  FileText,
  Home,
  Settings,
  User,
  MessageSquare,
  Star,
  Users,
  Shield,
  Heart 
} from 'lucide-react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import uthPage from './components/AuthPage';
//import authPage

import AuthPage from './components/AuthPage';
import Doctor from './components/Doctor';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';

const Header = () => (
  <header className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Activity className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold text-white">VNA Health</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
        {/* <a href="/doctors" className="text-gray-300 hover:text-blue-400 transition-colors">Find Doctors</a> */}
        <a href="/doctors" className="text-gray-300 hover:text-blue-400 transition-colors">
    Find Doctors</a>
        <a href="/chatbot" className="text-gray-300 hover:text-blue-400 transition-colors">Chatbot</a>
        
        <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a>
        
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Login / Register
        </button> */}

        <a href="/auth">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
    Login / Register
  </button>
</a>
      </div>
    </nav>
  </header>
);

// Hero Section
const HeroSection = () => (
  <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <div className="mb-8">
        <Activity className="h-16 w-16 text-blue-400 mb-6 mx-auto" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Your AI-Powered Virtual Nurse <br />at Your Fingertips!
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Experience healthcare reimagined with our intelligent virtual nursing assistant.
        Get instant medical guidance and connect with healthcare professionals.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors">
          Start Chatting
        </button>
        <button className="bg-gray-800 text-blue-400 px-8 py-4 rounded-lg border-2 border-blue-400 hover:bg-gray-700 transition-colors">
          Find a Doctor
        </button>
      </div>
    </div>
  </section>
);


const data = [
  {
    title: "AI Symptom Checker",
    content: <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
      Get instant health guidance powered by advanced AI.
    </p>,
    icon: <MessageSquare className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Find Nearby Doctors",
    content: <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
      Connect with qualified healthcare professionals in your area.
    </p>,
    icon: <Users className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Easy Appointments",
    content: <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
      Book and manage appointments with just a few clicks.
    </p>,
    icon: <Calendar className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Secure Records",
    content: <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
      Your health data is protected with military-grade encryption.
    </p>,
    icon: <Shield className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Health Monitoring",
    content: <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
      Track your vitals in real-time with IoT integration.
    </p>,
    icon: <Heart className="h-10 w-10 text-blue-400" />,
  },
];

const FeaturesSection = () => (
  <section className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            {feature.content}
          </div>
        ))}
      </div>
    </div>
  </section>
);


// Footer Component
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
            <li><a href="/about" className="text-gray-300 hover:text-blue-400">About Us</a></li>
            <li><a href="/doctors" className="text-gray-300 hover:text-blue-400">Find Doctors</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="text-gray-300 hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-300 hover:text-blue-400">Terms of Service</a></li>
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

//Main App Component
// const App = () => (
//   <div>
//     <Header />
//     <HeroSection />
//     <Timeline data={data} />
//     <Footer />
//   </div>
// );

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <div>
          <Header />
          <HeroSection />
          <Timeline data={data} />
          <Footer />
        </div>
      } />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/about" element={<About />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/doctor/*" element={<Doctor />} /> {/* Nested routes for Doctor */}
    </Routes>
  </Router>
);

export default App;




