import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Terms of Service</h1>
        <p className="text-xl text-gray-300 mb-8">
          By using VNA Health, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            Your use of our services constitutes acceptance of these terms.
          </p>
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <p className="text-gray-300 mb-4">
            You are responsible for providing accurate information and using our services responsibly.
          </p>
          <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
          <p className="text-gray-300">
            VNA Health is not liable for any indirect damages arising from the use of our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;