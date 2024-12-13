import React from 'react';
import Card from '../common/Card';

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <div className="text-primary text-4xl mb-4 transform group-hover:scale-110 transition duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </Card>
  );
};

export default ServiceCard;