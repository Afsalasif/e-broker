import React from 'react';
import { BookOpen, Briefcase, ShieldCheck, Globe, DollarSign } from 'lucide-react';

const KeyServices = () => {
  return (
    <section className="py-20 bg-gray-900 text-white rounded-xl shadow-xl relative overflow-hidden">
      <div className="container mx-auto px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight leading-tight mb-4">
            Key Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore the core services that E Broker offers to empower individuals in the real estate industry.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-full">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">E-Learning Real Estate University</h3>
              <p className="text-gray-300">
                Gain in-depth real estate knowledge through 20 specialized courses covering sales, property management, and legal regulations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-full">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-300">
                Receive accredited certifications recognized by Dubai authorities, boosting your credibility in the real estate sector.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-full">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Instant Career Opportunities</h3>
              <p className="text-gray-300">
                Upon course completion, gain direct job placements with top real estate firms in Dubai.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-full">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Platform Access</h3>
              <p className="text-gray-300">
                Utilize in-system communication, live chat support, and real-time buyer leads to close deals efficiently.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-full">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">High Commission Rates</h3>
              <p className="text-gray-300">
                Earn up to 35% commission per deal with fast payouts within three days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
