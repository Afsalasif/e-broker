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
       <Plancard />
       <BusinessPlatformAccess />
       <HowEBrokerWorks />
        
       
        
        {/* Contact & CTA */}
        <section className="py-10 text-center">
          <h2 className="text-xl font-semibold">Start Your Journey Today</h2>
          <Link href="/signup" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-lg">Sign Up Now</Link>
          <p className="text-gray-600 mt-4">For inquiries, contact: <a href="mailto:info@e-broker.world" className="text-blue-500">info@e-broker.world</a></p>
        </section>
      
    </div>
  );
}
