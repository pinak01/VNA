// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-8">About Us</h1>
//         <p className="text-xl text-gray-300 mb-8">
//           Welcome to VNA Health, your AI-powered virtual nurse assistant. We are dedicated to revolutionizing healthcare by providing instant medical guidance and connecting you with qualified healthcare professionals.
//         </p>
//         <p className="text-xl text-gray-300 mb-8">
//           Our mission is to make healthcare accessible, affordable, and efficient for everyone. With cutting-edge AI technology, we aim to empower you to take control of your health.
//         </p>
//         <p className="text-xl text-gray-300">
//           Join us on this journey to a healthier future!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Welcome to VNA Health, your AI-powered virtual nurse assistant. We are dedicated to revolutionizing healthcare by providing instant medical guidance and connecting you with qualified healthcare professionals.
        </motion.p>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our mission is to make healthcare accessible, affordable, and efficient for everyone. With cutting-edge AI technology, we aim to empower you to take control of your health.
        </motion.p>
        <motion.p 
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Join us on this journey to a healthier future!
        </motion.p>
      </div>
    </div>
  );
};

export default About;


