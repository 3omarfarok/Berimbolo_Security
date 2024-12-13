import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-80 p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;