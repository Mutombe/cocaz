import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../themeContext';
import { ExternalLink, Heart, Share2 } from 'lucide-react';

const InfluencerCard = ({ name, profession, testimonial, image, link }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.div
      className={`${currentTheme.card} rounded-xl shadow-xl backdrop-blur-sm p-6 transform hover:scale-105`}
      whileHover={{ scale: 1.05, translateY: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative mb-8">
        <div className="w-32 h-32 mx-auto">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <img
              src={image || "/api/placeholder/128/128"}
              alt={name}
              className={`w-full h-full rounded-full object-cover border-4 ${currentTheme.accent.replace('text', 'border')}`}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 ${currentTheme.button} ${currentTheme.buttonText} px-4 py-1 rounded-full text-sm font-medium shadow-lg`}
        >
          {profession}
        </motion.div>
      </div>
      
      <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-3 text-center`}>
        {name}
      </h3>
      
      <p className={`${currentTheme.text} small mb-6 text-center leading-relaxed`} >
        <small>
        "{testimonial}"</small>
      </p>
      
      <div className="flex justify-center space-x-4">
        <motion.button
          className={`${currentTheme.button} ${currentTheme.buttonText} px-4 py-2 rounded-full flex items-center space-x-2 shadow-md`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart size={18} />
          <span>Follow</span>
        </motion.button>
        
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${currentTheme.secondary} ${currentTheme.buttonText} px-4 py-2 rounded-full flex items-center space-x-2 shadow-md`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={18} />
          <span>Profile</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const InfluencerPage = () => {
  const { currentTheme } = useTheme();
  
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="py-20"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          variants={pageVariants}
        >
          <motion.h2
            className={`text-4xl font-bold ${currentTheme.accent}  mb-4 `}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Influencers
          </motion.h2>
          <motion.p 
            className={`${currentTheme.text} text-xl max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Meet the talented creators who trust COCAZ with their digital presence
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={pageVariants}
        >
          {influencers.map((influencer, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
            >
              <InfluencerCard {...influencer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfluencerPage;