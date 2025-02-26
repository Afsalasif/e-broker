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
import { Mail,  MapPin } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import ChatPopup from "./ChatPopup";
import TextVideoSection from "./ComponentC";

export default function Hhome() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navba />
      {/* <a
  href="mailto:info@blac-co.com"
  className="fixed bottom-4 z-20 right-4 bg-[#091650] border border-gray-300 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
>
  Contact Us
</a> */}
<ChatPopup />

      {/* Hero Section */}
      <Hero />

      {/* About E Broker */}
      <About />
      <KeyServices />
      <TextVideoSection  />
      <BusinessPlatformAccess />
      <MemberBenefits />

      {/* Pricing Plans */}
      <PlanC />
      <HowEBrokerWorks />

      {/* Contact & CTA */}
      
<section id="conta" className="bg-[#091650] py-10 text-white text-center md:text-left">
  <div className="container mx-auto px-6">
    <div className="flex justify-center space-x-4">
      {[
        { href: "#aboutus", label: "About Us" },
        { href: "#serv", label: "Our Services" },
        { href: "#blac-co", label: "Membership" },
        { href: "#cont", label: "Subscriptions" },
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

    <div className="mt-8 text-center space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Mail className="w-5 h-5 text-gray-300" />
        <a href="mailto:info@blac-co.com" className="text-sm text-gray-300 hover:underline">
          info@blac-co.com
        </a>
      </div>

      <div className="flex items-center justify-center space-x-2">
  <FaWhatsapp className="w-5 h-5 text-gray-300" />
  <a href="https://wa.me/971585209417" className="text-sm text-gray-300 hover:underline">
    +971 58 520 9417
  </a>
</div>

      <div className="flex items-center justify-center space-x-2">
        <MapPin className="w-5 h-5 text-gray-300" />
        <p className="text-sm text-gray-300">
          Office 21-41, Conrad Business Tower, SZR, Dubai, United Arab Emirates
        </p>
      </div>
    </div>

    <div className="mt-6 text-center">
      <p className="text-sm text-gray-400">
        © 2024 e-Broker. All Rights Reserved.
      </p>
    </div>
  </div>
</section>



    </div>
  );
}
