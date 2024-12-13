import React from 'react';
import { FaVideo, FaUserSecret, FaBuilding, FaShieldAlt } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from './ServiceCard';

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
    <div id="services" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services"
          subtitle="We offer comprehensive security solutions tailored to your needs"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;