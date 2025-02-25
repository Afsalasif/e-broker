"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-white flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white"></div>

      {/* Animated Dots on the Left Side */}
      <div className="absolute top-[33%] hidden md:grid left-0 w-80 h-80 rotate-90 transform grid-cols-10 grid-rows-5 gap-1 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-[#091650] opacity-20 animate-pulse"
            style={{ animationDelay: `${Math.random() * 2}s` }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-10 container mx-auto">
        <div className="text-[#091650] md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-7xl uppercase font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Global Real Estate Agents
          </motion.h1>
          <motion.p
            className="text-[#091650] text-lg mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            E Broker is an innovative real estate e-commerce platform that enables individuals worldwide to sell Dubai properties remotely and earn commissions, providing all the tools and support needed for success.
          </motion.p>
          <motion.div
            className="flex space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button
              className="bg-transparent hover:bg-cyan-600 text-[#091650] font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
              onClick={() => {
                document.getElementById("aboutus")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </button>
            <a
              href="/registration"
              className="bg-[#091650] border border-gray-300 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
              Sign Up
            </a>
          </motion.div>
        </div>

        {/* Illustration */}
       
      </div>
    </div>
  );
};

export default Hero;
