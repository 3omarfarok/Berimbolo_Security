import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary">Berimbolo Security</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Home</a>
            <a href="#services" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Services</a>
            <a href="#products" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Products</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Contact</a>
            <ThemeToggle />
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition duration-300">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Home</a>
              <a href="#services" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Services</a>
              <a href="#products" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Products</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">Contact</a>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;