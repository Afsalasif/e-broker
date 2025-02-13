"use client";
import Link from "next/link";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-20"
        />
        
        {/* Animated Spotlights */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full blur-3xl opacity-30"
        />
        
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 80, -100, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-400/30 rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 px-8">
        {/* Left Content */}
        <div className="text-gray-900 max-w-2xl text-center lg:text-left">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 uppercase text-sm font-semibold mb-2 tracking-wider"
          >
            join e-broker
          </motion.p>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            Master Dubai Real Estate <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">From Anywhere</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg mb-8 max-w-xl"
          >
            Accelerate your career with our immersive program. Earn commissions remotely while learning from top industry experts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              Start Free Trial
            </motion.button>
            
            <motion.a
              whileHover={{ x: 5 }}
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 group transition-all"
            >
              <span className="border-2 border-cyan-400/30 rounded-full p-2 group-hover:border-cyan-400 transition-all">
                <Play className="w-5 h-5 text-cyan-400" />
              </span>
              Watch Demo
            </motion.a>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-2xl"
        >
          <div className="relative rounded-2xl overflow-hidden transform perspective-1000 rotate-y-6 hover:rotate-y-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl" />
            <Image
              src="/city.jpg"
              alt="Course Preview"
              width={800}
              height={600}
              className="rounded-2xl transform rotate-x-3 rotate-y-3"
            />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400 p-6 rounded-full shadow-2xl backdrop-blur-sm"
            >
              <Play className="w-8 h-8 text-gray-900" />
              <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/30" />
            </motion.button>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-xl shadow-xl text-white"
          >
            <span className="font-bold">85%</span> Completion Rate
          </motion.div>
          
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-xl shadow-xl text-white"
          >
            <span className="font-bold">1.2M</span> Commissions Earned
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="block mb-2">Explore Courses</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;