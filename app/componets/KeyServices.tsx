'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, ShieldCheck, Globe, DollarSign } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'E-Learning Real Estate University',
    description: 'Gain in-depth real estate knowledge through 20 specialized courses covering sales, property management, and legal regulations.',
  },
  {
    icon: ShieldCheck,
    title: 'Certification',
    description: 'Get certification recognized by Dubai Land Department (DLD) & Knowledge and Human Development Authority (KHDA).',
  },
  {
    icon: Briefcase,
    title: 'Instant Career Opportunities',
    description: 'Upon course completion, gain direct job placements with Blac & Co Real Estate LLC in Dubai.',
  },
  {
    icon: Globe,
    title: 'Business Platform Access',
    description: 'Utilize in-system communication, live chat support, and real-time buyer leads to close deals efficiently.',
  },
  {
    icon: DollarSign,
    title: 'High Commission Rates',
    description: 'Earn 35% commission per deal with fast payouts within three to four working days.',
  },
];

const KeyServices = () => {
  return (
    <section id='serv' className="py-20 bg-white text-white relative overflow-hidden">
      <div className="container mx-auto px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-semibold uppercase text-[#091650] tracking-normal leading-tight mb-4">
            Key Services
          </h2>
          <p className="text-lg text-[#091650] max-w-3xl mx-auto">
            Explore the core services that E Broker offers to empower individuals in the real estate industry.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-[#091650] text-white p-4 rounded-full">
                <service.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl text-[#091650] uppercase font-thin mb-2">
                  {service.title}
                </h3>
                <p className="text-black">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
