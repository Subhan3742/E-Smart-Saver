"use client"

import React, { useState } from 'react';

const ContactUs = () => {
  // State for form handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., sending data to an API)
    alert('Form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">

        {/* Contact Information Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#206ea5] mb-4">Contact Us</h1>
          <p className="text-lg font-semibold text-gray-800 mb-4">We'd love to hear from you!</p>
          <div className="text-md text-gray-700">
          <p>
              <strong>Address:</strong>{' '}
              <a  className="text-[#206ea5] hover:underline">
                53 Grand St Almont,NY 11003
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a  className="text-[#206ea5] hover:underline">
                (917) 387-4528
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@example.com" className="text-[#206ea5] hover:underline">
                info@esmartsaver.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
