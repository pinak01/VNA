import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl text-gray-300 mb-8">
          Have questions or need assistance? We're here to help! Reach out to us via the form below or through our contact information.
        </p>
        <div className="bg-gray-800 rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;