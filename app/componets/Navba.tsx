'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/blac-co", label: "membership" },
    { href: "/contact", label: "Subscriptions" },
    { href: "/login", label: "Sign Up", className: "text-white bg-[#091650] uppercase px-4 py-2 rounded-lg" }
  ];

  return (
    <div>
      <header className={` top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${visible ? "bg-white backdrop-blur-md " : "-translate-y-full"} hidden md:flex`}>
      <Link href="/">
  <img
    src="/lgg.png"
    alt="Logo"
    className="w-[70px] h-[75px] md:w-[100px] md:h-[80px] transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-2 transform origin-center"
  />
</Link>

        
        {/* Desktop Menu */}
        <nav className="hidden md:flex md:justify-center md:items-center space-x-6">
          {navLinks.slice(0, -1).map((link) => (
            <Link key={link.href} href={link.href} className="text-[#091650] uppercase hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href={navLinks[navLinks.length - 1].href} className={navLinks[navLinks.length - 1].className}>
            {navLinks[navLinks.length - 1].label}
          </Link>
        </nav>
      </header>

      {/* Mobile Menu Button */}
      <button
        className={`fixed top-4 right-4 md:hidden bg-white/30 backdrop-blur-md p-2 rounded-md z-50 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white/30 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} z-40 md:hidden p-6 flex flex-col space-y-4`}>  
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[#12115e] ${link.className || ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
