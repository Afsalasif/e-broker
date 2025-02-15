import React from "react";
import { Rocket, BadgeDollarSign, Cloud, Globe } from "lucide-react";
import { BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <section
      id="aboutus"
      className="relative py-24 bg-white text-[#091650] overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="font-semibold text-5xl tracking-normal mb-2 uppercase">
            Who we are
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Revolutionizing Global Real Estate Commerce
          </p>
          <p className="text-lg text-gray-600">
            E Broker is an initiative by Blac & Co. Real Estate Dubai, a trusted
            name in the UAE&apos;s real estate sector. By combining industry
            expertise with cutting-edge technology, Blac & Co. has created E
            Broker, a next-generation real estate e-commerce platform that
            empowers individuals worldwide to sell Dubai properties remotely and
            earn commissions. By redefining traditional property sales, E Broker
            provides an all-in-one solution for those looking to establish
            themselves as independent real estate agents without the need for
            prior experience or a physical presence in Dubai. Unlike traditional
            listing portals, E Broker enables users to actively engage in real
            estate transactions, handling everything online while the company
            takes care of on-the-ground logistics in Dubai. This allows users to
            focus on building their real estate business from anywhere in the
            world while benefiting from E Broker&apos;s seamless digital
            infrastructure and expert support.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Cloud size={48} className="text-[#091650]" />
            <h3 className="text-2xl uppercase font-semibold mt-4">
              Cloud-Based Platform
            </h3>
            <p className="text-gray-600 mt-2">
              Manage Transactions from anywhere in the world.
            </p>
          </div>
          {/* Feature 1 */}

          <div className="flex flex-col items-center text-center">
            <BadgeCheck size={48} className="text-[#091650]" />
            <h3 className="text-2xl uppercase font-semibold mt-4">Get certification</h3>
            <p className="text-gray-600 mt-2">
             Get Certification Recogonized by Dubai Land Department (DLD) & Knowledge and Human Development Authority (KHDA)
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <BadgeDollarSign size={48} className="text-[#091650]" />
            <h3 className="text-2xl uppercase font-semibold mt-4">Earn Commissions</h3>
            <p className="text-gray-600 mt-2">
              Get rewarded with 35% commissions for every successful sale.
            </p>
          </div>
          {/* Feature 3 */}
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <Globe size={48} className="text-[#091650]" />
            <h3 className="text-2xl uppercase font-semibold mt-4">
              Global Sales Management
            </h3>
            <p className="text-gray-600 mt-2">
              Manage sales and transactions on 
              Web and Moile Application from anywhere in
              the world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
