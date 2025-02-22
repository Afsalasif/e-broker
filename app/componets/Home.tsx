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
      <button className="fixed bottom-4 z-20 right-4 bg-[#091650] border border-gray-300 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300">
        Contact Us
      </button>

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
      <section id="conta" className="bg-[#091650] py-10 text-white text-center md:text-left">
  <div className="container mx-auto px-6">
    <div className="flex justify-center space-x-4">
      {[
        { href: "#aboutus", label: "About Us" },
        { href: "#serv", label: "Our Services" },
        { href: "#blac-co", label: "Membership" },
        { href: "#cont", label: "Subscriptions" }
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-gray-300 hover:text-white transition"
        >
          {link.label}
        </Link>
      ))}
    </div>

    <div className="mt-8 text-center">
      <Link
        href="/registration"
        className="text-sm text-white bg-[#091650] uppercase px-4 py-2 rounded-lg hover:bg-[#0b1d70]"
      >
        Sign Up
      </Link>
    </div>

    <div className="mt-6 text-center">
      <p className="text-sm text-gray-400">
        © 2025 e-Broker. All Rights Reserved.
      </p>
    </div>
  </div>
</section>



    </div>
  );
}
