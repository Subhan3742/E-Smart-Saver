"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#206ea5] px-4"> {/* Removed py-4 to eliminate vertical padding */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image 
              src="/images/logo.png"  // Path to the logo image in the public folder
              alt="Logo" 
              width={150}  // Default width for larger screens
              height={100}  // Default height for larger screens
              className="rounded-full object-cover sm:w-[70px] sm:h-[40px] md:w-[150px] md:h-[100px]"  // Responsive classes for logo
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/contact_us" className="text-white">Contact Us</Link>
          <Link href="/term_condition" className="text-white">Term & Conditions</Link>
          <Link href="/refund_policy" className="text-white">Refund Policy</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" className="text-white hover:text-black hover:bg-white px-[4%] py-[1%]">Home</Link>
          <Link href="/services" className="text-white hover:text-black hover:bg-white px-[4%] py-[1%]">Services</Link>
          <Link href="/contact_us" className="text-white hover:text-black hover:bg-white px-[4%] py-[1%]">Contact Us</Link>
          <Link href="/term_condition" className="text-white hover:text-black hover:bg-white px-[4%] py-[1%]">Term & Conditions</Link>
          <Link href="/refund_policy" className="text-white hover:text-black hover:bg-white px-[4%] py-[1%]">Refund Policy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
