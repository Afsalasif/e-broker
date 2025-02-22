"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PlanC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayVariants = {
    initial: {
      opacity: 1,
      background:
        "linear-gradient(to bottom, rgb(18, 4, 100), rgb(20, 26, 59))",
    },
    exit: {
      opacity: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section id="cont" className="bg-[#091650] py-16">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl  uppercase tracking-wide font-semibold text-white mb-4">
            Our Subscription
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center">
          <motion.div
            className="relative max-w-md mx-auto"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* <AnimatePresence>
              {!isHovered && (
                <motion.div
                  className="absolute inset-0 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold cursor-pointer z-10"
                  variants={overlayVariants}
                  initial="initial"
                  exit="exit"
                  style={{ pointerEvents: "none" }}
                >
                  Click to reveal!
                </motion.div>
              )}
            </AnimatePresence> */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 flex flex-col items-center shadow-lg max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white mx-auto mt-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Lifetime Membership
              </h3>
              <div className="text-4xl font-bold text-white mb-4">$499</div>
              <dl>
                <dd className="text-white">
                  This one-time payment provides lifetime access to both the
                  E-learning Real Estate University and the Business Portal,
                  ensuring continuous access to all training materials and
                  features without additional renewal fees.
                </dd>
              </dl>
              <a
                href="/registration"
                className="bg-[#091650] text-white mt-5 font-extralight py-2 px-6 rounded-full transition-colors duration-200"
              >
                Get Subscription
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanC;
