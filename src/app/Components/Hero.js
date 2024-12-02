import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/cover.jpg" // Path to your image in the public folder
        alt="Hero Image"
        layout="fill" // Makes the image take up the full container
        // objectFit="cover" // Ensures the image covers the entire screen without distorting the aspect ratio
        className="absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Optional: Add overlay */}
      {/* Optional: Add other elements like text over the image */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
        Your Text Here
      </div> */}
    </div>
  );
}

export default Hero;
