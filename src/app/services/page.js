import React from 'react';
import Link from 'next/link';  // Import Link from Next.js

const page = () => {
  // Array of service data
  const data = [
    {
      heading: "Basic Landing Page Redesign",
      service: "$20",
      revision: "One Time Charge",
      detail: "+Content update </br> +Customized to Your Business Needs",
    },
    {
      heading: "Website Redesign",
      service: "$50",
      revision: "One Time Charge",
      detail: "+1 Design Concepts </br> +up to 4 Revisions on the Selected Design </br> +Customized to Your Business Needs",
    },
    {
      heading: "Silver",
      service: "$100",
      revision: "One Time Charge",
      detail: "+10 Total Of HTML Pages </br> +3 Home Images Slider </br> +4 Online Forms </br> +5 Design Revisions </br> +100% Custom Design </br> +Mobile Friendly Creation",
    },
    {
      heading: "Landing Page Design",
      service: "$150",
      revision: "One Time Charge",
      detail: "+1 HTML Page </br> +1 Home Image Creative Slider </br> +1 Online Form </br> +2 Design Revisions </br> +Email / Phone Support </br> +Mobile Friendly Designs",
    },
    {
      heading: "Basic Logo Design",
      service: "$200",
      revision: "One Time Charge",
      detail: "+5 Design Concepts </br> +up to 4 Revisions on the Selected Design </br> +Customized to Your Business Needs </br> +Web and Print Ready Formats </br> +You Own The Copyright",
    },
    {
      heading: "Basic Plan",
      service: "$250",
      revision: "One Time Charge",
      detail: "+Landing page </br> +1 Home Image Slider </br> +1 Online Form </br> +2 Design Revisions </br> +100% Custom Design </br> +Email / Phone Support </br> +Mobile Friendly Creations",
    },
    {
      heading: "Startup Plan",
      service: "$300",
      revision: "One Time Charge",
      detail: "+8 Total Of HTML Pages </br> +2 Home Image Slider </br> +2 Online Form </br> +4 Design Revisions </br> +100% Custom Design </br> +Email / Phone Support </br> +Mobile Friendly Creation",
    },
    {
      heading: "STARTUP CMS WEB DESIGN",
      service: "$350",
      revision: "One Time Charge",
      detail: "+5 Pages </br> +WordPress CMS </br> +Contact Form </br> +3 Design Revisions </br> +Google Map </br> +Social Media Integration </br> +Mobile Friendly Creation",
    },
    {
      heading: "ENTERPRISE",
      service: "$400",
      revision: "One Time Charge",
      detail: "+15 Total Of HTML Pages </br> +5 Home Image Slider </br> +5 Online Form </br> +10 Design Revisions </br> +Email / Phone Support </br> +Mobile Friendly Creation",
    },
    {
      heading: "Silver CMS Design",
      service: "$450",
      revision: "One Time Charge",
      detail: "+8 Pages </br> +WordPress CMS </br> +1 Online Form </br> +4 Design Revisions </br> +Google Map </br> +Social Media Integration </br> +Mobile Friendly Designs",
    },
    {
      heading: "Premium Logo Design",
      service: "$500",
      revision: "One Time Charge",
      detail: "+8 Design Concepts </br> +Customized to Your Business Needs </br> +Web and Print Ready Formats </br> +8 Design Revisions </br> +You Own The Copyright </br> +Email / Phone Support </br> +Mobile Friendly Creation",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-[#206ea5] text-[20px] md:text-[30px] lg:text-[50px] text-center font-semibold">
        Services
      </h2>

      {/* Grid Container */}
      <div className="text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold text-[#206ea5]">{item.heading}</h1>
            <h2 className="text-lg font-medium text-gray-700">{item.service}</h2>
            <h3 className="text-md text-gray-600">{item.revision}</h3>
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{ __html: item.detail }}
            />
            {/* Contact Us Button */}
            <div className="mt-4">
              <Link href="/contact_us">
                <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
