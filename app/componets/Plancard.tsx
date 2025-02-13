'use client'; // Ensure this is present if you're using it in an app directory

import React from 'react';
import { motion } from 'framer-motion';

const Plancard = () => {

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-2xl p-12 md:p-16 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title and Subtitle */}
      <motion.div className="mb-8 text-center" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Exclusive Membership</h2>
        <p className="text-gray-500 text-lg">Choose the best plan for your needs and start today!</p>
      </motion.div>

      {/* Horizontal Line */}
      <motion.div
        className="border-b border-gray-300 my-8 origin-left"
        variants={lineVariants}
      />

      {/* Membership Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Lifetime Membership */}
        <motion.div
          className="text-center p-10 bg-gradient-to-b from-blue-800 to-blue-500 rounded-xl text-white shadow-xl flex flex-col justify-between"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-semibold mb-6">Lifetime Membership</h3>
          <p className="text-5xl font-bold mb-6">$499</p>
          <p className="text-sm mb-8 opacity-80">
            A one-time payment for lifetime access to all courses, features, and support. No additional renewals required.
          </p>
          <button className="mt-auto bg-blue-600 text-white px-10 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700">
            Choose Plan
          </button>
        </motion.div>

        {/* Monthly Subscription Plans */}
        <motion.div
          className="text-left p-10 bg-gradient-to-b from-indigo-700 via-blue-600 to-blue-500 shadow-lg rounded-xl border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          variants={itemVariants}
        >
          <div className="text-white text-xl font-semibold mb-6">Monthly Subscription</div>
          <div className="text-white text-2xl font-semibold mb-6">$19.99</div>
          <ul className="space-y-3 text-sm text-white mb-8">
            <li>10 buyer leads</li>
            <li>Access to 3 areas in Dubai</li>
            <li>500 calling minutes</li>
            <li>WhatsApp & email features</li>
            <li>5 property viewings</li>
          </ul>
          <button className="bg-blue-600 text-white px-10 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700">
            Choose Plan
          </button>
        </motion.div>

        <motion.div
          className="text-left p-10 bg-gradient-to-b from-indigo-700 via-blue-600 to-blue-500 shadow-lg rounded-xl border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          variants={itemVariants}
        >
          <div className="text-white text-xl font-semibold mb-6">Monthly Subscription</div>
          <div className="text-white text-2xl font-semibold mb-6">$49.99</div>
          <ul className="space-y-3 text-sm text-white mb-8">
            <li>20 buyer leads</li>
            <li>3 hot buyer leads</li>
            <li>Access to 10 areas in Dubai</li>
            <li>1000 calling minutes</li>
            <li>WhatsApp & email features</li>
            <li>10 property viewings</li>
          </ul>
          <button className="bg-blue-600 text-white px-10 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700">
            Choose Plan
          </button>
        </motion.div>

        <motion.div
          className="text-left p-10 bg-gradient-to-b from-indigo-700 via-blue-600 to-blue-500 shadow-lg rounded-xl border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          variants={itemVariants}
        >
          <div className="text-white text-xl font-semibold mb-6">Monthly Subscription</div>
          <div className="text-white text-2xl font-semibold mb-6">$99.99</div>
          <ul className="space-y-3 text-sm text-white mb-8">
            <li>30 buyer leads</li>
            <li>5 hot buyer leads</li>
            <li>Access to unlimited areas</li>
            <li>Unlimited calling minutes</li>
            <li>WhatsApp & email features</li>
            <li>Unlimited property viewings</li>
          </ul>
          <button className="bg-blue-600 text-white px-10 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700">
            Choose Plan
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Plancard;
