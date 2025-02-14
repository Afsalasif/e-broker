import React from "react";
import Link from "next/link";
import Hero from "./Hero";
import Navba from "./Navba";
import About from "./About";
import MemberBenefits from "./MemberBenefits";
import KeyServices from "./KeyServices";
import SubscriptionPlans from "./Plancard";
import PriceDetailCard from "./Plancard";
import Plancard from "./Plancard";
import BusinessPlatformAccess from "./BusinessPlatformAccess";
import HowEBrokerWorks from "./HowEBrokerWorks";
import PlanC from "./PlanC";

export default function Hhome() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      
      <Navba />
     
        {/* Hero Section */}
       <Hero />
        
        {/* About E Broker */}
      <About />
      <MemberBenefits />
      <KeyServices />
        
        {/* Pricing Plans */}
       <PlanC />
       <BusinessPlatformAccess />
       <HowEBrokerWorks />
        
       
        
        {/* Contact & CTA */}
        <section className="bg-[#091650] py-10 text-white text-center md:text-left">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-semibold">About Us</h3>
        <p className="text-gray-400 mt-2">Learn more about who we are and our mission.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p className="text-gray-400 mt-2">Have any questions? Reach out to us anytime.</p>
        <p className="text-blue-500 mt-1"><a href="mailto:info@e-broker.world">info@e-broker.world</a></p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Black&Co</h3>
        <p className="text-gray-400 mt-2">Discover our partner: Black&Co.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Our Services</h3>
       
      </div>
    </div>

    <div className="mt-8 text-center">
      <Link href="/signup" className="inline-block bg-white text-[#091650] px-6 py-2 rounded-lg hover:bg-gray-100">Sign Up Now</Link>
    </div>

    <div className="mt-6 text-center">
      <p className="text-sm text-gray-400">© 2025 e-Broker. All Rights Reserved.</p>
    </div>
  </div>
</section>


      
    </div>
  );
}
