"use client"

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js

const Footer = () => {
  return (
    <footer className="bg-[#206ea5] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-center">
            <Image
              src="/images/logo.png" // Path to your logo in the public folder
              alt="Logo"
              width={150} // Adjust the size of the logo
              height={100}
              className="rounded-full object-cover mb-4"
            />
           
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-start sm:items-start md:item-center">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:contact@yourcompany.com" className="hover:underline">contact@yourcompany.com</a></li>
              <li>Phone: <a href="tel:+123456789" className="hover:underline">+1 (234) 567-89</a></li>
              <li>Address: 123 Business St, City, Country</li>
            </ul>
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-col items-start sm:items-start  md:item-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact_us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/term_condition" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/refund_policy" className="hover:underline">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 md:flex md:justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} E-Smart Saver. All Rights Reserved.</p>
          <Image
              src="/images/card.png" // Path to your logo in the public folder
              alt="Logo"
              width={200} // Adjust the size of the logo
              height={20}
              className="rounded-full object-cover mb-4"
            />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
