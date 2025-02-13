import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "24/7 AI Support",
      description: "Get instant medical guidance anytime, anywhere through our advanced AI system."
    },
    {
      title: "Professional Network",
      description: "Connect with qualified healthcare professionals for personalized care and consultation."
    },
    {
      title: "Data-Driven Care",
      description: "Leverage the power of AI and data analytics for better health outcomes."
    }
  ];

  const values = [
    {
      title: "Accessibility",
      description: "Making healthcare available to everyone, regardless of location or time."
    },
    {
      title: "Innovation",
      description: "Continuously improving our AI technology to provide better care."
    },
    {
      title: "Privacy",
      description: "Maintaining the highest standards of data security and patient confidentiality."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-16">
      {/* Hero Section */}
      <motion.div 
        className="container mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Healthcare with AI
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Welcome to VNA Health, your AI-powered virtual nurse assistant. We're revolutionizing healthcare by providing instant medical guidance and connecting you with qualified healthcare professionals.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        className="container mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            To make healthcare accessible, affordable, and efficient for everyone through innovative AI technology. We believe in empowering individuals to take control of their health journey with intelligent, data-driven support.
          </p>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="container mx-auto px-4 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;