"use client";
import React, { useState, useEffect } from "react";
import { GraduationCap, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

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
        ease: [0.22, 1, 0.36, 1],
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

  return (
    <motion.section
      className="py-20 bg-white text-gray-800 overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate={slideIn ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-5xl font-semibold uppercase tracking-normal leading-tight mb-4 text-[#091650]">
            Who Can Become an E Broker Member?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            E Broker offers an innovative platform for students, professionals,
            and global participants to thrive in Dubai's real estate market.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <motion.div
            className="p-8 rounded-lg border border-white/30 shadow-lg backdrop-blur-lg bg-[#091650]/10 hover:shadow-2xl transition duration-300"
            variants={itemVariants}
          >
            <GraduationCap className="mx-auto mb-4 w-12 h-12 text-[#091650]" />
            <h3 className="text-xl font-semibold mb-2 uppercase text-[#091650]">
              Students & Fresh Graduates
            </h3>
            <p className="text-black">
              E Broker is ideal for students looking to develop valuable skills
              and certifications that will make them stand out in the
              competitive job market. The platform is also perfect for fresh
              graduates who need practical experience and want to boost their
              resumes with real estate certifications and instant remort job
              opportunities.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-lg border border-white/30 shadow-lg backdrop-blur-lg bg-[#091650]/10 hover:shadow-2xl transition duration-300"
            variants={itemVariants}
          >
            <UserCheck className="mx-auto mb-4 w-12 h-12 text-[#091650]" />
            <h3 className="text-xl font-semibold uppercase mb-2 text-[#091650]">
              Career Professionals
            </h3>
            <p className="text-black">
              For professionals looking to enhance their skill set, switch
              careers, or explore new opportunities, E Broker offers the
              flexibility and resources needed to succeed. The platform caters
              to those interested in remote work and allows professionals to
              expand into the real estate market.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MemberBenefits;
