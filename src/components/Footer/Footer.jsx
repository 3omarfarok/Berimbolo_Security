import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">SecureGuard</h3>
            <p className="text-gray-400">
              Protecting what matters most with advanced security solutions and professional expertise.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition duration-300">Services</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition duration-300">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Video Surveillance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Access Control</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Cyber Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Personal Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {currentYear} BerimboloSecurity. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;