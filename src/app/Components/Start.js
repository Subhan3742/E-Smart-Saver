import React from 'react';
import { HeartHandshake, TrendingUp, Clock } from 'tabler-icons-react'; // Correct the icon imports

const startSteps = [
  {
    icon: <HeartHandshake size={40} />,
    title: 'Cooperation with You',
    description: 'Real words, with thoughts that count, information that has value slice when you.',
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Growing Your Business',
    description: 'The paint you may slap on your face to impress the new boss is your business.',
  },
  {
    icon: <Clock size={40} />,
    title: 'Save Your Time',
    description: 'Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that.',
  },
];

const HowToStart = () => {
  return (
    <div className="text-center px-6 py-12 lg:px-20 lg:py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">How to Start</h1>
      <p className="text-lg text-gray-600 mb-8">
        You can entrust your business to us. Let's work together to take your business to the next level.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {startSteps.map((step, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">{step.icon}</div> {/* Center the icon */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToStart;
