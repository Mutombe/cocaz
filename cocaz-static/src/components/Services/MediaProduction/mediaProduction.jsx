import React from 'react';
import { motion } from 'framer-motion';

const MediaProduction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Media Production Services</h1>
      <p className="mb-4">At COCAZ, we're passionate about bringing stories to life through cutting-edge media production. Our team of skilled professionals is dedicated to creating captivating content that resonates with audiences across Zimbabwe and beyond.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Current Project Spotlight: Mandi</h2>
      <p className="mb-4">We're thrilled to announce our current project, "Mandi," a powerful film that draws inspiration from the critically acclaimed "The Woman King." Set in pre-colonial Zimbabwe, "Mandi" tells the story of a fearless female warrior who leads her people against foreign invaders.</p>
      <p className="mb-4">Much like "The Woman King," our film celebrates the strength, courage, and resilience of African women throughout history. "Mandi" showcases breathtaking battle sequences, intricate cultural details, and compelling performances that bring this important story to life.</p>
      <p className="mb-4">Our dedicated team is working tirelessly to ensure that "Mandi" not only entertains but also educates and inspires viewers about the rich history and powerful women of Zimbabwe.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Film and TV Production</li>
        <li>Music Video Production</li>
        <li>Commercial and Corporate Video Production</li>
        <li>Documentary Filmmaking</li>
        <li>Post-Production and Editing</li>
        <li>Animation and Motion Graphics</li>
      </ul>
      
      <p className="mt-8">Whether you're looking to create the next big blockbuster or produce engaging content for your brand, COCAZ has the expertise and creativity to bring your vision to life. Contact us today to learn more about our media production services and how we can help tell your story.</p>
    </motion.div>
  );
};

export default MediaProduction;