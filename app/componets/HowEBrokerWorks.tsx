'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HowEBrokerWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    hover: { scale: 1.02, y: -5, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <motion.section
      className="py-20 bg-white relative overflow-hidden rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-blue-400 opacity-95" /> */}
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-6xl font-extralight uppercase text-[#091650]">
            the steps you need to follow
          </h2>
          <p className="mt-4 text-[#091650] font-medium">Streamlined Process for Success</p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col items-center space-y-12">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <Step
              key={step}
              number={step.toString()}
              text={getStepText(step)}
              variants={itemVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Step = ({ number, text, variants }: any) => (
  <motion.div
    className="flex items-center group w-full max-w-2xl"
    variants={variants}
    whileHover="hover"
  >
    {/* Number Circle */}
    <div className="relative flex-shrink-0">
      <div className="w-14 h-14 rounded-full bg-[#091650] text-white flex items-center justify-center font-bold text-xl z-10
           shadow-lg shadow-blue-900/50">
        {number}
      </div>
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-full h-[2px] bg-blue-400/30 w-24 transform -translate-y-1/2 z-0" />
    </div>

    {/* Text Box */}
    <div className="ml-6 px-6 py-4 rounded-xl bg-white border border-blue-50 text-[#091650] shadow-lg hover:shadow-xl transition-shadow
         duration-300 flex-grow relative before:absolute before:left-0 before:top-1/2 before:-translate-x-full before:-translate-y-1/2
         before:border-8 before:border-r-blue-100 before:border-transparent">
      <p className="font-semibold text-lg leading-tight">{text}</p>
    </div>
  </motion.div>
);

// Helper function for step text
const getStepText = (step: number) => {
  const steps = [
    "Quick Registration & Profile Setup",
    "Full Access to E-Learning Platform",
    "Interactive Training Modules & Resources",
    "Certification & Skill Validation",
    "Instant Remote Job Placement",
    "Business Management Portal Activation",
    "Dedicated Leads & Communication Suite"
  ];
  return steps[step - 1] || "Step";
};

export default HowEBrokerWorks;