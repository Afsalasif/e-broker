'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiMessageSquare, FiMail, FiZap } from 'react-icons/fi';

const BusinessPlatformAccess = () => {
  const features = [
    {
      title: "In-system Calling",
      description: "Seamless voice communication integrated directly within the platform",
      icon: <FiPhoneCall className="w-8 h-8 mb-4 text-blue-600" />,
    },
    {
      title: "Unified Communications",
      description: "Integrated WhatsApp & email with smart threading",
      icon: <FiMessageSquare className="w-8 h-8 mb-4 text-green-600" />,
    },
    {
      title: "24/7 Support Hub",
      description: "Instant access to multi-disciplinary support teams",
      icon: <FiMail className="w-8 h-8 mb-4 text-purple-600" />,
    },
    {
      title: "Live Lead Stream",
      description: "Real-time property matches & buyer analytics",
      icon: <FiZap className="w-8 h-8 mb-4 text-orange-600" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const cardVariants = {
    hover: { 
      y: -10,
      scale: 1.05,
      boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.15)',
      transition: { 
        type: 'spring',
        stiffness: 300,
      }
    },
  };

  return (
    <motion.section
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Intelligent Business Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empower your real estate operations with our AI-driven platform featuring predictive analytics, 
            smart automation, and real-time collaboration tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center"
                variants={cardVariants}
              >
                <div className="mb-6 relative">
                  {feature.icon}
                  <div className="absolute inset-0 bg-current opacity-10 blur-3xl rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Join 5,000+ agents already transforming their business
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BusinessPlatformAccess;