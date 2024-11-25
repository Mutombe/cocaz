import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Handshake, Users, Star, Trophy } from 'lucide-react';
import { useTheme } from '../themeContext';
import AnimatedBackground from '../Enhanced/enhanced';
import LeadersPage from '../Leadership/leadership';

const StatCard = ({ icon: Icon, title, description, delay }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.div
      className={`${currentTheme.card} rounded-xl p-6 flex flex-col items-center relative overflow-hidden group`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className={`${currentTheme.secondary} p-3 rounded-full mb-4`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <Icon className={`h-6 w-6 ${currentTheme.buttonText}`} />
      </motion.div>
      
      <h3 className={`${currentTheme.accent} text-lg font-bold mb-2 text-center`}>
        {title}
      </h3>
      
      <p className={`${currentTheme.text} text-sm text-center leading-relaxed`}>
        {description}
      </p>
    </motion.div>
  );
};

const About = () => {
  const { currentTheme } = useTheme();
  
  const stats = [
    {
      icon: TrendingUp,
      title: "Rapid Growth",
      description: "Our members experience exponential growth in their careers through strategic guidance and support."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Members are celebrated for their outstanding contributions to Zimbabwe's creative landscape."
    },
    {
      icon: Handshake,
      title: "Collaborative Community",
      description: "A supportive network of content creators sharing knowledge and opportunities."
    },
    {
      icon: Users,
      title: "Growing Network",
      description: "Join hundreds of successful content creators shaping Zimbabwe's digital future."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Setting the standard for professional content creation in Zimbabwe."
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Celebrating countless success stories from our member community."
    }
  ];

  return (
      <motion.div 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
      <br />
      <br />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-5xl font-bold ${currentTheme.accent} mb-4`}>
              About COCAZ
            </h1>
            <p className={`${currentTheme.text} text-xl max-w-3xl mx-auto`}>
              Empowering Zimbabwe's Creative Future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
          >
            <AnimatedBackground>
              <motion.div
                className={`${currentTheme.card} rounded-xl p-8`}
                whileHover={{ scale: 1.02 }}
              >
                <p className={`${currentTheme.text} text-lg mb-6 leading-relaxed`}>
                  COCAZ, the Content Creation Association of Zimbabwe, was founded in 2020 with a bold vision: to empower and elevate Zimbabwe's creative voices. We believe in the transformative power of digital content to inspire, educate, and connect people across boundaries.
                </p>
                <p className={`${currentTheme.text} text-lg mb-8 leading-relaxed`}>
                  Our dedicated team of industry experts works tirelessly to provide comprehensive support, from cutting-edge marketing strategies to innovative monetization solutions, ensuring our members thrive in the digital age.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="/about"
                    className={`${currentTheme.button} ${currentTheme.buttonText} px-8 py-3 rounded-full font-bold shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className={`${currentTheme.secondary} ${currentTheme.buttonText} px-8 py-3 rounded-full font-bold shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedBackground>
          </motion.div>
          

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  {...stat}
                  delay={0.1 * index}
                />
              ))}
            </motion.div>
          </div>
      </div>
      <LeadersPage/>
      </motion.div>
  );
};

export default About;