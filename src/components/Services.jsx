import React from 'react';
import { FaVideo, FaUserSecret, FaBuilding, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaVideo />,
      title: "Video Surveillance",
      description: "24/7 monitoring with advanced camera systems and real-time alerts."
    },
    {
      icon: <FaUserSecret />,
      title: "Personal Security",
      description: "Professional bodyguards and personal protection services."
    },
    {
      icon: <FaBuilding />,
      title: "Facility Security",
      description: "Comprehensive security solutions for commercial and residential properties."
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description: "Advanced digital protection and network security services."
    }
  ];

  return (
    <div id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive security solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-primary text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;