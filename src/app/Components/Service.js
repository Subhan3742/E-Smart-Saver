import React from 'react';

const services = [
  {
    title: 'Web Design Services',
    description:
      'Expert web design services delivering visually stunning and user-friendly websites tailored to your unique brand identity and business goals.',
  },
  {
    title: 'WordPress Development',
    description:
      'Expert WordPress development services crafting customized and responsive websites tailored to your specific requirements, ensuring a user experience.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Expert mobile app development services creating innovative and functional applications that meet your business needs and engage your target audience.',
  },
  {
    title: 'Game Development',
    description:
      'Game development services crafting entertaining gaming experiences through cutting-edge technologies and tailored to captivate players.',
  },
  {
    title: 'Video Editing',
    description:
      'Professional video editing services for captivating, polished videos that convey your message and engage your audience.',
  },
  {
    title: 'Service Provider Platform (SPP)',
    description:
      'A reliable service provider platform connecting businesses with skilled professionals, facilitating efficient collaboration and high-quality service delivery.',
  },
  {
    title: 'Graphic Designing',
    description:
      'Creative graphic design services crafting visually stunning and impactful designs that effectively communicate your brand’s message and captivate your audience.',
  },
  {
    title: 'Blockchain Development',
    description:
      'Blockchain development services implementing secure and decentralized solutions that revolutionize industries and enhance trust in digital transactions.',
  },
  {
    title: 'Website Redesign',
    description:
      'Comprehensive website redesign services to enhance online presence, drive targeted traffic, and maximize conversions using strategic techniques and platforms.',
  },
  {
    title: 'UI/UX',
    description:
      'UI/UX services delivering intuitive and visually appealing designs that enhance user satisfaction and drive optimal user experiences for your digital products.',
  },
  {
    title: 'Shopify Development',
    description:
      'Shopify development services building robust and customized online stores that provide seamless shopping experiences and drive business growth.',
  },
  {
    title: 'Content Writing',
    description:
      'Content writing services delivering engaging and impactful written content that captivates readers and effectively communicates your brand’s message.',
  },
];

const Services = () => {
  return (
    <div className="text-center px-6 py-12 lg:px-20 lg:py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>
      <p className="text-lg text-gray-600 mb-8">
        At Digital Discount Service, we combine exceptional creativity, visionary ideas, marketing expertise, and cutting-edge technology to craft an outstanding final product that outshines the competition.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
