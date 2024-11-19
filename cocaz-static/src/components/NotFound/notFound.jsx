import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100 rounded-lg min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <AlertTriangle className="w-24 h-24 text-[#318000] dark:text-[#5fd75f] mb-6" />
      </motion.div>
      <h1 className="text-4xl font-bold mb-4 text-[#318000] dark:text-[#5fd75f]">404 - Page Not Found</h1>
      <p className="mb-8 text-center text-gray-700 dark:text-gray-300">Oops! It seems like you've ventured into uncharted territory. This page doesn't exist in our media universe.</p>
      <Link to="/">
        <motion.button
          className="bg-[#318000] dark:bg-[#5fd75f] text-white dark:text-gray-900 px-6 py-3 rounded-full flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default NotFound;