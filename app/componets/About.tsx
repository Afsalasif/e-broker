import React from "react";
import { Rocket, BadgeDollarSign, Cloud, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-24 bg-white text-[#091650] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-left mb-16 max-w-4xl">
          <h2 className="font-extralight text-5xl tracking-widest mb-2 uppercase">
            Explore E Broker
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Revolutionizing Global Real Estate Commerce
          </p>
          <p className="text-lg text-gray-600">
            E Broker is a next-generation real estate platform that enables individuals 
            worldwide to sell Dubai properties remotely and earn commissions. Our mission 
            is to simplify property transactions by providing powerful tools and support.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Rocket size={48} className="text-[#091650]" />
            <h3 className="text-2xl font-semibold mt-4">Fast Transactions</h3>
            <p className="text-gray-600 mt-2">
              Secure and efficient property sales with minimal hassle.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <BadgeDollarSign size={48} className="text-[#091650]" />
            <h3 className="text-2xl font-semibold mt-4">Earn Commissions</h3>
            <p className="text-gray-600 mt-2">
              Get rewarded with high commissions for every successful sale.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Cloud size={48} className="text-[#091650]" />
            <h3 className="text-2xl font-semibold mt-4">Cloud-Based Platform</h3>
            <p className="text-gray-600 mt-2">
              Manage listings and sales from anywhere in the world.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <Globe size={48} className="text-[#091650]" />
            <h3 className="text-2xl font-semibold mt-4">Global Reach</h3>
            <p className="text-gray-600 mt-2">
              Sell Dubai properties to international buyers effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
