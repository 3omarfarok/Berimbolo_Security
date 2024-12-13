import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaLock, FaUserShield, FaArrowRight } from 'react-icons/fa';
import Card from './common/Card';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div id="home" className="min-h-screen pt-20 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Hero Content */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              #1 Security Solution Provider
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
              variants={itemVariants}
            >
              Secure Your World with Advanced Protection
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              We provide comprehensive security solutions to protect what matters most to you. 
              Our expert team ensures your safety 24/7 with cutting-edge technology.
            </motion.p>
            <motion.div 
              className="flex gap-4 items-center"
              variants={itemVariants}
            >
              <button className="group bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition duration-300 flex items-center gap-2">
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary dark:text-white px-8 py-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <motion.div variants={statsVariants}>
              <Card className="group hover:bg-primary hover:scale-105 transition-all duration-300">
                <FaShieldAlt className="text-primary group-hover:text-white text-4xl mb-4 transition-colors" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-white transition-colors">24/7 Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors">Round-the-clock security monitoring</p>
              </Card>
            </motion.div>
            <motion.div variants={statsVariants}>
              <Card className="group hover:bg-primary hover:scale-105 transition-all duration-300">
                <FaLock className="text-primary group-hover:text-white text-4xl mb-4 transition-colors" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-white transition-colors">Access Control</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors">Smart access management</p>
              </Card>
            </motion.div>
            <motion.div variants={statsVariants}>
              <Card className="group hover:bg-primary hover:scale-105 transition-all duration-300">
                <FaUserShield className="text-primary group-hover:text-white text-4xl mb-4 transition-colors" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-white transition-colors">Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors">Professional security staff</p>
              </Card>
            </motion.div>
            <motion.div variants={statsVariants}>
              <Card className="bg-gradient-to-br from-primary to-secondary group hover:scale-105 transition-all duration-300">
                <div className="text-center text-white">
                  <h3 className="text-4xl font-bold mb-2">98%</h3>
                  <p className="text-white/90">Customer Satisfaction</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;