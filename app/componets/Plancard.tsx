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
    <section className="bg-[#091650] py-16">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-extralight uppercase tracking-widest text-white mb-4">Our Flexible Pricing Plans for our Business Portal</h2>
          <p className="text-gray-300 text-lg">Choose your plan to acces the buisnel .</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 flex flex-col items-center shadow-lg"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-20 h-20 rounded-full bg-[#091650] mb-4">
              {/*  Replace with your shield icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white mx-auto mt-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
            <div className="text-4xl font-bold text-white mb-4">$19.99</div>
            <div className="text-sm text-gray-300 mb-6">/ Per Month</div>
            <ul className="text-left text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                10 buyer leads
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Access to properties in 3 areas of Dubai
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                500 calling minutes
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                WhatsApp and email features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                5 property viewings
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                1 personalized 30-minute session with a trainer each month
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                24/7 live chat and sales/documentation support
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Get started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 flex flex-col items-center shadow-lg"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-20 h-20 rounded-full bg-blue-700 mb-4">
              {/* Replace with your key-lock icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white mx-auto mt-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a3 3 0 00-3-3H7.5a3 3 0 00-3 3v10.5a3 3 0 003 3h7.5a3 3 0 003-3V13.5m-3 0h3m-3 0h-3M6 17.25H18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <div className="text-4xl font-bold text-white mb-4">$49.99</div>
            <div className="text-sm text-gray-300 mb-6">/ Per Month</div>
            <ul className="text-left text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                20 buyer leads
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                3 hot buyer leads
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Access to properties in 10 areas of Dubai
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                1000 calling minutes
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                WhatsApp and email features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                10 property viewings
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                2 personalized 30-minute sessions with a trainer each month
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                24/7 live chat and sales/documentation support
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Get started
            </button>
          </motion.div>

          {/* Elite Plan */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 flex flex-col items-center shadow-lg"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-20 h-20 rounded-full bg-blue-700 mb-4">
              {/* Replace with your monitor-password icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white mx-auto mt-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0h-1.5m-16.5 0H3m18 0v2.25c0 .414-.895.75-2 .75H5c-1.105 0-2-.336-2-.75V5.25m18 0c.414 0 .75.895.75 2v.75m-18 0v.75c0 .414.336.75.75.75H4.5m0-15L12 5.25m0 0l7.29-3.125M7.5 12.75h9.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Elite</h3>
            <div className="text-4xl font-bold text-white mb-4">$99.99</div>
            <div className="text-sm text-gray-300 mb-6">/ Per Month</div>
            <ul className="text-left text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                30 buyer leads
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                5 hot buyer leads
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Access to properties in unlimited areas of Dubai
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Unlimited calling minutes
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                WhatsApp and email features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Unlimited property viewings
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                3 personalized 30-minute sessions with a trainer each month
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                24/7 live chat and sales/documentation support
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Plancard;