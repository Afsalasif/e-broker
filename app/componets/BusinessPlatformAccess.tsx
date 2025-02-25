'use client';
import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhoneCall, FiMessageSquare, FiMail, FiShoppingCart, FiX } from 'react-icons/fi';

type Feature = {
  id: number;
  title: string;
  icon: ReactNode;
  description?: string;
  fullDescription?: string;
};

const BusinessPlatformAccess = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features: Feature[] = [
    {
      id: 1,
      title: 'In-system Calling',
      description: 'Seamless voice communication integrated directly within the platform.',
      fullDescription: 'Our integrated VoIP calling system allows you to make and receive calls directly within the platform with crystal-clear audio quality. Features include automatic call logging, voicemail transcription, and intelligent routing based on client history.',
      icon: <FiPhoneCall className="w-10 h-10 mb-4 text-[#091650]" />,
    },
    {
      id: 2,
      title: 'Unified Communications',
      description: 'Integrated WhatsApp & email with smart threading.',
      fullDescription: 'Centralize all client communications with our smart messaging hub. Automatically thread conversations across WhatsApp, email, and SMS. AI-powered suggestions help craft perfect responses.',
      icon: <FiMessageSquare className="w-10 h-10 mb-4 text-[#091650]" />,
    },
    {
      id: 3,
      title: '24/7 Support Hub',
      description: 'Instant access to multi-disciplinary support teams.',
      fullDescription: 'Our round-the-clock support hub connects you instantly with legal, technical, and sales specialists. Features include screen sharing, document co-editing, and priority escalation paths.',
      icon: <FiMail className="w-10 h-10 mb-4 text-[#091650]" />,
    },
    {
      id: 4,
      title: 'Viewing Support',
      description: 'Schedule property viewings with pickup and drop service.',
      fullDescription: 'Easily schedule property viewings with our seamless booking system. We provide a smooth pickup and drop service for clients attending the viewing, ensuring a stress-free experience.',
      icon: <img src="/jku.png" alt="Pickup Service Icon" className="w-10 h-10 mb-4" />,
    },
    {
      id: 5,
      title: 'Sales Support',
      description: 'Showcase properties online with a seamless purchasing experience.',
      fullDescription: 'Create a virtual sales spot for your clients where they can explore detailed property listings, inquire about availability, and make direct offers. Real-time updates and 24/7 access to property information.',
      icon: <FiShoppingCart className="w-10 h-10 mb-4 text-[#091650]" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
  };

  const openModal = (feature: Feature) => {
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
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-5xl font-bold uppercase text-[#091650] mb-6">
            Intelligent Business Platform
          </h2>
          <p className="text-xl text-[#091650] max-w-3xl mx-auto leading-relaxed">
            Empower your real estate operations with smart automation and real-time collaboration tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="group relative"
              initial="hidden"
              animate="visible"
              exit="exit"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center"
                variants={cardVariants}
              >
                <div className="mb-6 relative">{feature.icon}</div>
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isModalOpen && selectedFeature && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-2xl w-full relative border border-white/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-[#091650] hover:text-blue-600"
                >
                  <FiX className="w-6 h-6" />
                </button>
                <div className="text-center">
                  <div className="mb-6">{selectedFeature.icon}</div>
                  <h3 className="text-3xl font-semibold text-[#091650] mb-6">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-[#091650] text-lg leading-relaxed mb-8">
                    {selectedFeature.fullDescription}
                  </p>
                  <button
                    onClick={closeModal}
                    className="bg-[#091650] px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform"
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default BusinessPlatformAccess;
