import { Camera, CalendarClock, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Pen } from "lucide-react";
import { useTheme } from "../themeContext";
import React, { useState, useEffect, useCallback } from 'react';

const MotionLink = motion(Link);

const CardVariants = {
  initial: {
    scale: 0.95,
    opacity: 0,
    y: 20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const phrases = ["Welcome to COCAZ !", "Let's Influence", "Let's create together !"];

const HeroTypewriter = () => {
  const { currentTheme } = useTheme();
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
        <motion.h1 className={`text-5xl md:text-6xl font-bold ${currentTheme.accent} leading-tight relative`}>
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

const BackgroundAnimation = ({ currentTheme }) => (
  <motion.div
    className="absolute inset-0 z-0 rounded-lg"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.2, 0.1],
      scale: [1, 1.02, 1.01],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage: "url('../assets/boot-camp.jpg')",
        backgroundBlendMode: "multiply",
        filter: "grayscale(100%) brightness(100%)",
      }}
    />
    <div className={`absolute inset-0 ${currentTheme.primary}`} />
  </motion.div>
);

const Hero = () => {
  const { currentTheme } = useTheme();

  const services = [
    {
      icon: Camera,
      title: "Media Production",
      description: "Elevate your content with our media production services.",
      bgImage: "../assets/camp.jpg",
      linkTo: "/services/media-production",
    },
    {
      icon: CalendarClock,
      title: "Event Management",
      description: "Let us handle the logistics of your events.",
      bgImage: "../assets/eventprep.jpg",
      linkTo: "/services/event-management",
    },
    {
      icon: UserCheck,
      title: "Talent Management",
      description: "We empower and support content creators.",
      bgImage: "../assets/bootcamp4.jpg",
      linkTo: "/services/talent-management",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 rounded-lg">
        <BackgroundAnimation currentTheme={currentTheme} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20">
          {/* Hero Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroTypewriter />

            <p className={`text-xl ${currentTheme.text} mb-8 leading-relaxed`}>
              COCAZ is the Content Creation Association of Zimbabwe, dedicated
              to empowering and supporting content creators across various
              industries with innovative solutions and professional development.
            </p>

            <div className="flex space-x-4">
              <MotionLink
                to="/signup"
                className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </MotionLink>

              <MotionLink
                to="/about"
                className={`${currentTheme.card} ${currentTheme.text} border-2 ${currentTheme.accent.replace('text', 'border')} font-bold py-4 px-8 rounded-xl transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </MotionLink>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-2xl group"
                variants={CardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110 rounded-lg"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    opacity: 0.3,
                  }}
                />

                <div className={`absolute inset-0 ${currentTheme.card} rounded-lg`} />

                <div className="relative z-10 p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <service.icon className={`${currentTheme.accent} h-12 w-12`} />
                  </div>

                  <h3 className={`${currentTheme.text} text-xl font-bold mb-2 ${currentTheme.card} p-6 rounded-lg backdrop-blur-sm w-full h-full flex flex-col items-center justify-between border border-white/20 transition-colors duration-300 group-hover:bg-white/20`}>
                    {service.title}
                  </h3>

                  <p className={`${currentTheme.text} text-sm mb-4 opacity-80`}>
                    {service.description}
                  </p>

                  <MotionLink
                    to={service.linkTo}
                    className={`inline-block ${currentTheme.button} ${currentTheme.buttonText} px-6 py-2 rounded-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore
                  </MotionLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
