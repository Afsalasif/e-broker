'use client';
import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhoneCall, FiMessageSquare, FiMail, FiZap, FiX } from 'react-icons/fi';
import { FiMapPin } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaCarSide, FaUser } from "react-icons/fa";


import { MdDirectionsCar, MdPerson } from "react-icons/md";
// const [selectedFeature, setSelectedFeature] = useState(null);
type Feature = {
  id: number;
  title: string;
  icon:ReactNode,
  description?: string;
  fullDescription?: string;
};

const BusinessPlatformAccess = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "In-system Calling",
      description: "Seamless voice communication integrated directly within the platform",
      fullDescription: "Our integrated VoIP calling system allows you to make and receive calls directly within the platform with crystal-clear audio quality. Features include automatic call logging, voicemail transcription, and intelligent routing based on client history. All calls are securely recorded and synced with your CRM.",
      icon: <FiPhoneCall className="w-10 h-10 mb-4 text-[#091650]" />,
    },
    {
      title: "Unified Communications",
      description: "Integrated WhatsApp & email with smart threading",
      fullDescription: "Centralize all client communications with our smart messaging hub. Automatically thread conversations across WhatsApp, email, and SMS. AI-powered suggestions help craft perfect responses, while sentiment analysis alerts you to urgent matters. All messages are encrypted and archived for compliance.",
      icon: <FiMessageSquare className="w-10 h-10 mb-4 text-[#091650]" />,
    },
    {
      title: "24/7 Support Hub",
      description: "Instant access to multi-disciplinary support teams",
      fullDescription: "Our round-the-clock support hub connects you instantly with legal, technical, and sales specialists. Features include screen sharing, document co-editing, and priority escalation paths. Average response time under 90 seconds for critical issues, with full case history tracking.",
      icon: <FiMail className="w-10 h-10 mb-4 text-[#091650]" />,
    },
   



    {
      title: "Viewing Support",
      description: "Schedule property viewings with a convenient pickup and drop service for your clients.",
      fullDescription: "Easily schedule property viewings with our seamless booking system. We provide a smooth pickup and drop service for clients attending the viewing, ensuring a stress-free experience from start to finish. Real-time notifications and reminders keep everyone on track.",
      icon: (
        <img 
        src="/jku.png" 
        alt="Pickup Service Icon" 
        className="w-10 h-10 mb-4 " 
      />
      

      ),
    }
    
    ,
    


 {
  title: "Sales Support",
  description: "Showcase properties online with a seamless purchasing experience for clients.",
  fullDescription: "Create a virtual sales spot for your clients where they can explore detailed property listings, inquire about availability, and make direct offers. Our platform provides an interactive space for seamless transactions, real-time updates, and 24/7 access to property information.",
  icon: <FiShoppingCart className="w-10 h-10 mb-4 text-[#091650]" />,
}

    
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

  const openModal = (feature:any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <motion.section
      className="relative py-24 bg-white overflow-hidden"
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
          <h2 className="text-5xl font-bold uppercase text-[#091650] mb-6">
            Intelligent Business Platform
          </h2>
          <p className="text-xl text-[#091650] max-w-3xl mx-auto leading-relaxed">
            Empower your real estate operations with our platform featuring  
            smart automation, and real-time collaboration tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* First 4 cards */}
  {features.slice(0, 4).map((feature, index) => (
    <motion.div
      key={index}
      className="group relative"
      variants={itemVariants}
      whileHover="hover"
    >
      <motion.div
        className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center ${
          index === 4 ? 'lg:w-1/2 xl:w-1/3' : ''
        }`}
        variants={cardVariants}
      >
        <div className="mb-6 relative">
          {feature.icon}
          <div className="absolute inset-0 bg-current opacity-10 blur-3xl rounded-full" />
        </div>
        <h3 className="text-2xl font-semibold text-[#091650] mb-4">
          {feature.title}
        </h3>
        <p className="text-[#091650] leading-relaxed mb-6">
          {feature.description}
        </p>
        <button 
          onClick={() => openModal(feature)}
          className="mt-auto text-[#091650] hover:text-blue-600 font-medium transition-colors"
        >
          Read More →
        </button>
        <div className="mt-6 w-full opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full" />
        </div>
      </motion.div>
      {/* Card content remains same */}
    </motion.div>
  ))}
  
  {/* Fifth card */}
  <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center">
    <motion.div
      className="group relative w-full md:w-2/3 lg:w-1/2"
      variants={itemVariants}
      whileHover="hover"
    >
      <motion.div
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center"
        variants={cardVariants}
      >
        {/* Fifth card content */}
        {features[4].icon}
        <h3 className="text-2xl font-semibold text-[#091650] mb-4">
          {features[4].title}
        </h3>
        <p className="text-[#091650] leading-relaxed mb-6">
          {features[4].description}
        </p>
        <button 
          onClick={() => openModal(features[4])}
          className="mt-auto text-[#091650] hover:text-blue-600 font-medium transition-colors"
        >
          Read More →
        </button>
        <div className="mt-6 w-full opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full" />
        </div>
      </motion.div>
    </motion.div>
  </div>
</div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full relative border border-white/20"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-[#091650] hover:text-blue-600 transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>

                {selectedFeature && (
                  <div className="text-center">
                    <div className="mb-6 relative">
                      {selectedFeature.icon}
                      <div className="absolute inset-0 bg-current opacity-10 blur-3xl rounded-full" />
                    </div>
                    <h3 className="text-3xl font-semibold text-[#091650] mb-6">
                      {selectedFeature.title}
                    </h3>
                    <p className="text-[#091650] text-lg leading-relaxed mb-8">
                      {selectedFeature.fullDescription}
                    </p>
                    <button
                      onClick={closeModal}
                      className="bg-[#091650] px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg"
                    >
                      Close Details
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        {/* <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-[#091650] px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Join 5,000+ agents already transforming their business
          </p>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default BusinessPlatformAccess;