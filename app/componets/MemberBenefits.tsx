'use client'
import React, { useState, useEffect } from 'react';
import { Briefcase, Globe, Home, GraduationCap, UserCheck, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MemberBenefits = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Custom ease for a snappier feel
        delayChildren: 0.4,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 30,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="py-20 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate={slideIn ? "visible" : "hidden"}
    >
      {/* Animated Background Lines (Optional - for extra visual flair) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            #E0E7FF,
            #E0E7FF 4px,
            transparent 0,
            transparent 8px
          )`,
        }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold tracking-tight leading-tight mb-4 text-blue-700">
            Who Can Become an E Broker Member?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            E Broker offers an innovative platform for students, professionals, and global participants to thrive in Dubai's real estate market.
          </p>
        </motion.div>

        {/* Benefits Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-12">
          <motion.div
            className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} className="inline-block">
              <GraduationCap className="mx-auto mb-4 w-12 h-12 text-yellow-500" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Students & Fresh Graduates</h3>
            <p className="text-gray-500">
              E Broker is ideal for students looking to develop valuable skills...
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} className="inline-block">
              <UserCheck className="mx-auto mb-4 w-12 h-12 text-yellow-500" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Professionals</h3>
            <p className="text-gray-500">
              For professionals looking to enhance their skill set...
            </p>
          </motion.div>

         
        </div>

        {/* Second Row of Benefits */}
        {/* ... (Add the other benefits here, similar to the above) ... */}

      </div>
    </motion.section>
  );
};

export default MemberBenefits;