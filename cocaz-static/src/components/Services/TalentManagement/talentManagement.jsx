import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Music, Award, TrendingUp, Briefcase, DollarSign } from 'lucide-react';

const TalentManagement = () => {
  const [selectedApproach, setSelectedApproach] = useState(null);

  const featuredArtists = [
    { name: "Master H", genre: "Dancehall", description: "Master H has been making waves in the Zimbabwean dancehall scene with his unique blend of hard-hitting lyrics and infectious rhythms. Under COCAZ management, he has released several chart-topping singles and performed at major festivals across the country." },
    { name: "Jah Signal", genre: 'Dancehall', description: "Jah Signal has become a household name in Zimbabwe's dancehall community. With COCAZ's support, he has expanded his reach, collaborating with international artists and headlining shows throughout Southern Africa." },
  ];

  const managementApproach = [
    { title: "Career Strategy", icon: TrendingUp, description: "We work closely with each artist to develop a personalized career plan." },
    { title: "Brand Development", icon: Award, description: "Our team helps artists craft and maintain a strong, authentic brand image." },
    { title: "Booking and Tour Management", icon: Music, description: "We handle performance bookings and manage tour logistics." },
    { title: "Media Relations", icon: Mic, description: "We secure press coverage and manage public relations to boost our artists' profiles." },
    { title: "Digital Presence", icon: Briefcase, description: "We help artists navigate the digital landscape, from social media management to content strategy." },
    { title: "Legal and Financial Advice", icon: DollarSign, description: "Our network of professionals provides guidance on contracts, royalties, and financial planning." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#318000] dark:text-[#5fd75f]">Talent Management</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">At COCAZ, we're proud to represent and nurture some of Zimbabwe's most exciting content creators and artists. Our talent management services are designed to help artists reach their full potential and achieve their career goals.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#318000] dark:text-[#5fd75f]">Featured Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArtists.map((artist, index) => (
          <motion.div
            key={artist.name}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#318000] dark:text-[#5fd75f]">{artist.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Genre: {artist.genre}</p>
              <p className="text-gray-700 dark:text-gray-300">{artist.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#318000] dark:text-[#5fd75f]">Our Management Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managementApproach.map((approach, index) => (
          <motion.div
            key={approach.title}
            className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${selectedApproach === index ? 'ring-2 ring-[#318000] dark:ring-[#5fd75f]' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedApproach(selectedApproach === index ? null : index)}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <approach.icon className="w-8 h-8 text-[#318000] dark:text-[#5fd75f] mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{approach.title}</h3>
              </div>
              {selectedApproach === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {approach.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-12 bg-[#318000]/10 dark:bg-[#5fd75f]/10 rounded-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#318000] dark:text-[#5fd75f]">Ready to Take Your Career to the Next Level?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">COCAZ is committed to fostering the growth of Zimbabwe's creative talents. Whether you're an established artist looking for new management or an
          up-and-coming creator ready to take the next step, we're here to help you achieve your dreams.</p>
        <button className="bg-[#318000] dark:bg-[#5fd75f] text-white dark:text-gray-900 font-bold py-2 px-4 rounded hover:bg-[#318000]/80 dark:hover:bg-[#5fd75f]/80 transition duration-300">
          Contact Us Today
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TalentManagement;