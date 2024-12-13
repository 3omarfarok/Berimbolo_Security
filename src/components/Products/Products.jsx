import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      name: "Smart Security Camera Pro",
      description: "4K Ultra HD security camera with AI-powered motion detection",
      price: "299.99",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&q=80",
      badge: "Best Seller"
    },
    {
      name: "Access Control Hub",
      description: "Centralized access management system with biometric authentication",
      price: "499.99",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&q=80",
      badge: "New"
    },
    {
      name: "SafeGuard Smart Lock",
      description: "WiFi-enabled smart lock with fingerprint and PIN access",
      price: "199.99",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80"
    },
    {
      name: "Perimeter Sensor Kit",
      description: "Advanced motion and heat detection system for property boundaries",
      price: "399.99",
      image: "https://images.unsplash.com/photo-1563459802257-2a97df940f11?w=500&q=80",
      badge: "Popular"
    }
  ];

  return (
    <div id="products" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Security Products"
          subtitle="Discover our range of cutting-edge security solutions designed to protect what matters most"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;