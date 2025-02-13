import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Dashboard</h1>
        <p className="text-xl text-gray-300 mb-8">
          Welcome to your dashboard! Here, you can manage your health data, appointments, and more.
        </p>
        <div className="bg-gray-800 rounded-lg p-8">
          <p className="text-gray-300">Dashboard content will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;