import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Palette, Music, Video } from 'lucide-react';

const SuccessfulProjects = () => {
  const projects = [
    { name: 'TechSphere', icon: Code, description: 'Revolutionary AI-driven development platform' },
    { name: 'ArtisticVision', icon: Palette, description: 'Next-gen digital art creation suite' },
    { name: 'SoundScape', icon: Music, description: 'Immersive audio production environment' },
    { name: 'CinematicWonders', icon: Video, description: 'Cloud-based video editing powerhouse' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-teal-400 to-blue-500 p-8 rounded-lg shadow-lg mt-8"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center mb-6"
      >
        <CheckCircle className="text-white w-10 h-10 mr-4" />
        <h2 className="text-3xl font-bold text-white">Successful Projects</h2>
      </motion.div>
      <p className="text-white text-lg mb-6">
        Our portfolio of successful projects stands as a testament to our innovation, dedication, and transformative impact across various industries. Each project represents a unique challenge conquered and a new frontier explored in the realm of digital creativity and technological advancement.
      </p>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white bg-opacity-20 p-6 rounded-lg hover:bg-opacity-30 transition-all duration-300"
          >
            <motion.div className="flex items-center mb-4">
              <project.icon className="text-yellow-300 w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
            </motion.div>
            <p className="text-white text-lg">{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SuccessfulProjects;