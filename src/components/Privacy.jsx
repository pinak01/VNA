import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-xl text-gray-300 mb-8">
          At VNA Health, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
        </p>
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect information such as your name, email address, and health data to provide you with personalized services.
          </p>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            Your information is used to improve our services, provide medical guidance, and connect you with healthcare professionals.
          </p>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-300">
            We use advanced encryption and security measures to protect your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;