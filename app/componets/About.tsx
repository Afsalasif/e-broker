import React from 'react';
import { Rocket, BadgeDollarSign,  Cloud, Globe } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden rounded-3xl shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 -top-20 -left-20 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-b from-blue-400/20 -bottom-40 -right-40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-6 py-2 rounded-full">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-semibold">Innovative Real Estate Platform</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionizing Global Real Estate Commerce
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            E Broker - A Blac & Co. Real Estate Dubai initiative, empowers worldwide members to remotely sell Dubai properties and earn commissions through our groundbreaking digital ecosystem.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all hover:border-blue-400/30">
            <div className="flex gap-6 items-start">
              <BadgeDollarSign className="w-12 h-12 text-blue-300 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Membership Advantage</h3>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-center gap-3">
                    {/* <Certificate className="w-5 h-5 text-blue-300" /> */}
                    $499 Lifetime Access with 20 Certified Courses
                  </li>
                  <li className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-blue-300" />
                    Monthly Business Portal Subscription
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-300" />
                    Global Remote Operation Capability
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all hover:border-blue-400/30">
            <div className="flex gap-6 items-start">
              <div className="bg-blue-500/20 p-4 rounded-xl">
                <Globe className="w-12 h-12 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Digital First Infrastructure</h3>
                <p className="text-lg text-blue-100 mb-6">
                  Transform into a global real estate agent with our complete digital toolkit while we handle Dubai operations:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/40 p-4 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Online Transaction Management</div>
                    <div className="text-xs text-blue-300">Secure digital deal closing</div>
                  </div>
                  <div className="bg-blue-900/40 p-4 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Comprehensive Logistics Support</div>
                    <div className="text-xs text-blue-300">On-ground Dubai operations handled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center bg-white/5 backdrop-blur-lg py-12 px-8 rounded-2xl border border-white/10 mb-16">
          <h3 className="text-3xl font-bold mb-6">Why Choose E Broker?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                $499
              </div>
              <div className="text-sm text-blue-200">One-Time Lifetime Membership</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-sm text-blue-200">Professional Certifications</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-blue-200">Remote Operation Capability</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact" className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold py-5 px-12 rounded-xl shadow-2xl transition-all 
            hover:gap-4 hover:scale-105 hover:shadow-blue-500/30">
            <Rocket className="w-5 h-5" />
            Launch Your Real Estate Career Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;