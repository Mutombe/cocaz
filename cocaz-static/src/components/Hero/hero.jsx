import { Camera, CalendarClock, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Pen } from "lucide-react";
import { useTheme } from "../themeContext";
import React, { useState, useEffect, useCallback } from 'react';

// Animated Link component
const MotionLink = motion(Link);

// Animation variants for staggered animations
const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 }
  }
};

// Typewriter animation component
const HeroTypewriter = () => {
  const { currentTheme } = useTheme();
  const phrases = ["Welcome to COCAZ !", "Let's Influence", "Let's create together !"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const TYPING_SPEED = 150;
  const DELETING_SPEED = 100;
  const WAITING_TIME = 2000;

  const getCurrentPhrase = useCallback(() => {
    return phrases[currentPhraseIndex];
  }, [currentPhraseIndex]);

  useEffect(() => {
    let timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, WAITING_TIME);
      return () => clearTimeout(timeout);
    }

    const handleTyping = () => {
      const currentPhrase = getCurrentPhrase();

      if (!isDeleting && !isWaiting) {
        if (currentText.length < currentPhrase.length) {
          const nextChar = currentPhrase[currentText.length];
          setCurrentText(prev => prev + nextChar);
          timeout = setTimeout(handleTyping, TYPING_SPEED);
        } else {
          setIsWaiting(true);
        }
      } else if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(prev => prev.slice(0, -1));
          timeout = setTimeout(handleTyping, DELETING_SPEED);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isWaiting, getCurrentPhrase]);

  return (
    <motion.div
      className="min-h-[80px] flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative">
        <motion.h1 className={`text-5xl md:text-7xl font-bold ${currentTheme.accent} leading-tight relative`}>
          <AnimatePresence mode="popLayout">
            {currentText.split('').map((char, index) => (
              <motion.span
                key={`${index}-${char}-${currentPhraseIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.1 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>

          <motion.div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${currentText.length * 2.2}rem` }}
            initial={{ opacity: 1 }}
            animate={{
              y: [-2, 2],
              opacity: isWaiting ? [1, 0.5, 1] : 1,
            }}
            transition={{
              y: {
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: isDeleting ? 180 : -45,
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                rotate: { duration: 0.3 }
              }}
            >
              <Pen className={`w-8 h-8 ${currentTheme.accent.replace('text', 'text')}`} />
            </motion.div>
          </motion.div>
        </motion.h1>
      </div>
    </motion.div>
  );
};

// Hero section component
const Hero = () => {
  const { currentTheme } = useTheme();

  const services = [
    {
      icon: Camera,
      title: "Media Production",
      description: "Professional photography, videography, and audio production services.",
      bgImage: "../assets/media-production.jpg",
      linkTo: "/services/media-production",
    },
    {
      icon: CalendarClock,
      title: "Event Management",
      description: "Full-service event planning and execution for creators.",
      bgImage: "../assets/event-management.jpg",
      linkTo: "/services/event-management",
    },
    {
      icon: UserCheck,
      title: "Talent Management",
      description: "Career development and representation for content creators.",
      bgImage: "../assets/talent-management.jpg",
      linkTo: "/services/talent-management",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../assets/boot-camp.jpg')",
            filter: "blur(8px) brightness(40%)",
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-green-900/80 to-black/70`} />
        
        {/* Animated particles/dots - visual enhancement */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - text and CTA */}
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTypewriter />
            
            <motion.p 
              className={`text-xl ${currentTheme.text} leading-relaxed max-w-xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              COCAZ is Zimbabwe's premier association for content creators, providing professional development, 
              resources, and networking opportunities to help creators reach their full potential.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MotionLink
                to="/signup"
                className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-2`}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Join Now</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </MotionLink>

              <MotionLink
                to="/about"
                className={`${currentTheme.card} ${currentTheme.text} border-2 ${currentTheme.accent.replace('text', 'border')} font-bold py-4 px-8 rounded-xl transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </MotionLink>
            </motion.div>
            
            {/* Social proof element */}
            <motion.div
              className="flex items-center gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    style={{
                      backgroundImage: `url(../assets/member-${i+1}.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </div>
              <p className={`${currentTheme.text} text-sm`}>
                Join <span className={currentTheme.accent}>300+</span> content creators 
                already in our community
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - service cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-2xl group"
                variants={itemVariants}
                whileHover="hover"
              >
                {/* Card background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                  }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 group-hover:from-black/80`} />
                
                {/* Card content */}
                <div className="relative h-full z-10 p-6 flex flex-col justify-between">
                  <div className="mb-2 transform transition-transform group-hover:-translate-y-2">
                    <service.icon className={`${currentTheme.accent} h-10 w-10`} />
                  </div>

                  <div>
                    <h3 className={`${currentTheme.text} text-xl font-bold mb-2 group-hover:text-white`}>
                      {service.title}
                    </h3>

                    <p className={`${currentTheme.text} text-sm mb-4 opacity-80 group-hover:opacity-100`}>
                      {service.description}
                    </p>

                    <MotionLink
                      to={service.linkTo}
                      className={`inline-block ${currentTheme.button} ${currentTheme.buttonText} px-5 py-2 rounded-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore
                    </MotionLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
