import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <Loader className="w-16 h-16 text-[#318000] dark:text-[#5fd75f]" />
      </motion.div>
      <motion.h2 
        className="text-2xl font-semibold mt-6 text-[#318000] dark:text-[#5fd75f]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading amazing content...
      </motion.h2>
      <motion.p
        className="mt-4 text-center text-gray-700 dark:text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Please wait while we prepare your media experience.
      </motion.p>
    </motion.div>
  );
};

export default Loading;