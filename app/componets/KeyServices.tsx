import React from 'react';
import { BookOpen, Briefcase, ShieldCheck, Globe, DollarSign } from 'lucide-react';

const KeyServices = () => {
  return (
    <section id='serv' className="py-20 bg-white text-white   relative overflow-hidden">
      <div className="container mx-auto px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold uppercase text-[#091650] tracking-normal leading-tight mb-4">
            Key Services
          </h2>
          <p className="text-lg text-#091650 max-w-3xl mx-auto">
            Explore the core services that E Broker offers to empower individuals in the real estate industry.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex items-start space-x-4">
            <div className="bg-[#091650] text-white p-4 rounded-full">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl text-[#091650]  uppercase font-thin mb-2">E-Learning Real Estate University</h3>
              <p className="text-black">
                Gain in-depth real estate knowledge through 20 specialized courses covering sales, property management, and legal regulations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#091650] text-white  p-4 rounded-full">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl text-[#091650] uppercase font-thin mb-2">Certification</h3>
              <p className="text-black">
              Get Certification Recogonized by Dubai Land Department (DLD) & Knowledge and Human Development Authority (KHDA)
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#091650] text-white  p-4 rounded-full">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl text-[#091650] uppercase font-thin mb-2">Instant Career Opportunities</h3>
              <p className="text-black">
                Upon course completion, gain direct job placements with Blac & co Real estate LLC in Dubai.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#091650] text-white  p-4 rounded-full">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl text-[#091650] uppercase font-thin mb-2">Business Platform Access</h3>
              <p className="text-black">
                Utilize in-system communication, live chat support, and real-time buyer leads to close deals efficiently.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#091650] text-white  p-4 rounded-full">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl text-[#091650] uppercase font-thin mb-2">High Commission Rates</h3>
              <p className="text-black">
                Earn 35% commission per deal with fast payouts within three to four woking days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
