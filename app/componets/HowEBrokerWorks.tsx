'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  };

  return (
    <motion.section
      className="py-20 bg-white relative overflow-hidden rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-semibold uppercase text-[#091650]">how e-broker works</h2>
          <p className="mt-4 text-[#091650] font-medium">Streamlined Process for Success</p>
        </motion.div>

        <div className="flex flex-col items-center space-y-12">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <Step key={step} number={step.toString()} text={getStepText(step)} details={getStepDetails(step)} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Step = ({ number, text, details }:any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    className="flex items-center group w-full max-w-2xl"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="relative flex-shrink-0">
      <div className="w-14 h-14 rounded-full bg-[#091650] text-white flex items-center justify-center font-bold text-xl z-10 shadow-lg shadow-blue-900/50">
        {number}
      </div>
      <div className="absolute top-1/2 left-full h-[2px] bg-blue-400/30 w-24 transform -translate-y-1/2 z-0" />
    </div>
    <motion.div
      className="ml-6 px-6 py-4 rounded-xl bg-white border border-blue-50 text-[#091650] shadow-lg transition-shadow duration-300 flex-grow relative"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: isHovered ? 1 : 0.8, scale: isHovered ? 1.05 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <p className="font-semibold text-lg leading-tight">{text}</p>
      <AnimatePresence>
        {isHovered && (
          <motion.p
            className="text-sm mt-2 text-gray-600"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {details}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  </motion.div>
  );
};

const getStepText = (step:any) => {
  const steps = [
    "Quick Registration & Profile Setup",
    "Full Access to E-Learning Platform",
    "Interactive Training Modules & Resources",
    "Certification & Skill Validation",
    "Instant Remote Job Placement",
    "Business Management Portal Activation",
    "Get Paid",
  ];
  return steps[step - 1] || "Step";
};

const getStepDetails = (step:any) => {
  const details = [
    "Sign up in just a few minutes by providing essential details such as your name, email, and preferred job category. Complete your profile by uploading your resume, detailing your professional experience, skills, and career goals. This helps tailor the platform's offerings to your specific needs and aspirations.",
    "Gain immediate access to a vast library of learning materials that include comprehensive courses, eBooks, articles, and video tutorials. These resources cover a wide array of topics, from basic concepts to advanced techniques, providing you with the tools necessary to enhance your skillset and stay ahead in your field.",
    "Engage with interactive training modules that offer a hands-on approach to learning. Participate in quizzes, assignments, and challenges designed to test your knowledge and improve your practical skills. These modules are created with real-world scenarios to ensure you're fully prepared for your future role.",
    "Once you’ve completed the necessary modules and assessments, you can validate your skills through official certifications. These certificates are recognized by industry leaders and serve as proof of your expertise, making your profile more attractive to potential employers.",
    "After completing the training and certifications, the platform matches you with top remote job opportunities based on your profile, qualifications, and preferences. The job matching algorithm takes into account your experience level, desired work hours, and geographical location to provide the most relevant job suggestions in real-time.",
    "Once you land a job, you can unlock access to a comprehensive business management portal. This portal provides you with tools to manage your projects, communicate with clients, track deadlines, and monitor your productivity. The portal also offers performance analytics to help you improve and grow professionally.",
    "Finally, once your job is completed, you’ll receive your earnings securely and on time. The platform offers flexible payment options, such as direct bank transfer, PayPal, or other methods, ensuring that your payment is processed smoothly, and you can access your hard-earned money without delays."
  ];
  
  return details[step - 1] || "More info";
};

export default HowEBrokerWorks;
