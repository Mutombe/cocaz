import React from 'react';
import { motion } from 'framer-motion';

const InfluencerCard = ({ name, profession, testimonial, image, link }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="relative mb-6">
      <div className="w-32 h-32 mx-auto">
        <img 
          src={image || "/api/placeholder/128/128"} 
          alt={name} 
          className="w-full h-full rounded-full object-cover border-4 border-[#318000]" 
        />
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#318000] text-white px-4 py-1 rounded-full text-sm">
        {profession}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-[#318000] mb-3">{name}</h3>
    <p className="text-gray-700 cursive mb-4">"{testimonial}"</p>
    <div className="flex justify-center space-x-4">
      <motion.a
        href="/about"
        className="bg-[#318000] text-white px-4 py-2 rounded-full hover:bg-[#266600] transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Follow
      </motion.a>
      <motion.a
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-[#318000] text-[#318000] px-4 py-2 rounded-full hover:bg-[#318000] hover:text-white transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Learn More
      </motion.a>
    </div>
  </motion.div>
);

const InfluencerPage = () => {
  const influencers = [
    {
      name: "Loraine Guyo",
      profession: "Actress",
      testimonial: "COCAZ has helped me reach new heights in my career!",
      link: "https://www.facebook.com/lorraineguyoproductions",
      image: "/assets/loraine.jpg"
    },
    {
      name: "Matsanga",
      profession: "Musician/Actor",
      testimonial: "COCAZ has opened doors I never knew existed!",
      link: "https://www.facebook.com/profile.php?id=100064838858644",
      image: "/assets/matsanga.jpg"
    },
    {
      name: "Kuda Rashman",
      profession: "Comedian",
      testimonial: "Thanks to COCAZ, my jokes are reaching a wider audience!",
      link: "https://www.facebook.com/profile.php?id=100044864416580",
      image: "/assets/rashman.jpg"
    },
    {
      name: "Madam Boss",
      profession: "Comedian/Actress",
      testimonial: "COCAZ has been instrumental in boosting my online presence!",
      link: "https://www.facebook.com/Madambosszim",
      image: "/assets/madamboss.jpg"
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-[#318000] relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Influencers
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {influencers.map((influencer, index) => (
            <InfluencerCard key={index} {...influencer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;
