import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../themeContext';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const LeaderCard = ({ name, position, bio, image, email, linkedin, twitter }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.div
      className={`${currentTheme.card} rounded-xl shadow-xl backdrop-blur-sm p-6 transform hover:scale-105`}
      whileHover={{ scale: 1.05, translateY: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative mb-8">
        <div className="w-40 h-40 mx-auto relative">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full h-full"
          >
            <div className="aspect-square w-full h-full relative">
              <img
                src={image || "/api/placeholder/160/160"}
                alt={name}
                className={`absolute inset-0 w-full h-full rounded-full object-cover border-4 ${currentTheme.accent.replace('text', 'border')}`}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }}
                onError={(e) => {
                  e.target.src = "/api/placeholder/160/160";
                }}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 ${currentTheme.button} ${currentTheme.buttonText} px-4 py-1 rounded-full text-sm font-medium shadow-lg`}
        >
          {position}
        </motion.div>
      </div>
      
      <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-3 text-center`}>
        {name}
      </h3>
      
      <p className={`${currentTheme.text} text-sm mb-6 text-center leading-relaxed h-24 overflow-y-auto`}>
        {bio}
      </p>
      
      <div className="flex justify-center space-x-4">
        {email && (
          <motion.a
            href={`mailto:${email}`}
            className={`${currentTheme.button} ${currentTheme.buttonText} p-2 rounded-full flex items-center shadow-md`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
          </motion.a>
        )}
        
        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.secondary} ${currentTheme.buttonText} p-2 rounded-full flex items-center shadow-md`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
        )}
        
        {twitter && (
          <motion.a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.secondary} ${currentTheme.buttonText} p-2 rounded-full flex items-center shadow-md`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const LeadersPage = () => {
  const { currentTheme } = useTheme();
  
  const leaders = [
    {
      name: "Takunda Tapfuma",
      position: "Founder & Chairman",
      bio: "Visionary leader with 7+ years of experience in digital media and content marketing. Pioneering new ways to empower creators across Africa.",
      email: "takundatapfuma@gmail.com",
      linkedin: "https://linkedin.com/in/takunda",
      twitter: "https://twitter.com/takunda",
      image: "/taku.jpeg"
    },
    {
      name: "Wellington Bakaimani",
      position: "Co-Founder & Chairman",
      bio: "Strategic operations expert ensuring smooth delivery of COCAZ services. Passionate about building scalable systems for creator success.",
      email: "sarah.johnson@cocaz.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      image: "/welly.jpeg"
    },
    {
      name: "Bridget Paradza",
      position: "Secretary",
      bio: "Dedicated to understanding and addressing the unique needs of African creators.",
      email: "bridget@cocaz.com",
      linkedin: "https://linkedin.com/in/bridget",
      twitter: "https://twitter.com/bridget",
      image: "/bri.jpg"
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
            className={`text-4xl font-bold ${currentTheme.accent} mb-4`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Leadership Team
          </motion.h2>
          <motion.p 
            className={`${currentTheme.text} text-xl max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Meet the visionaries driving COCAZ's mission to empower African creators
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={pageVariants}
        >
          {leaders.map((leader, index) => (
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
              <LeaderCard {...leader} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeadersPage;