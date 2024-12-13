import React from 'react';
import Card from '../common/Card';

const ProductCard = ({ product }) => {
  return (
    <Card className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
            {product.badge}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-primary dark:text-primary font-bold">${product.price}</span>
        <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition duration-300">
          Learn More
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;