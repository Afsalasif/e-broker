'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navba = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/blac-co", label: "Blac & Co" },
    { href: "/contact", label: "Contact Us" },
    { href: "/login", label: "Sign In", className: "text-white bg-blue-600 px-4 py-2 rounded-lg" }
  ];

  return (
    <div>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[50px] h-[25px] md:w-[70px] md:h-[35px] transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-2"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden justify-center items-center md:flex space-x-6">
          {navLinks.slice(0, -1).map((link) => (
            <Link key={link.href} href={link.href} className="text-blue-600 hover:underline">
              {link.label}
            </Link>
          ))}
          <Link
            href={navLinks[navLinks.length - 1].href}
            className={navLinks[navLinks.length - 1].className}
          >
            {navLinks[navLinks.length - 1].label}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 z-40 transition-all ease-in-out duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-blue-600 ${link.className || ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Navba;
