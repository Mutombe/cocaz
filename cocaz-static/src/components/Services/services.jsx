import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../themeContext';
import { 
  BadgeDollarSign, 
  GraduationCap, 
  Waypoints, 
  TrendingUp, 
  Users, 
  Target,
  Megaphone,
  Award
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.div
      className={`${currentTheme.card} rounded-xl  flex flex-col items-center relative overflow-hidden group py-20`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className={`absolute inset-0 ${currentTheme.secondary} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      
      <motion.div
        className={`${currentTheme.secondary} p-4 rounded-full mb-6`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <Icon className={`h-8 w-8 ${currentTheme.buttonText}`} />
      </motion.div>
      
      <h3 className={`${currentTheme.accent} text-xl font-bold mb-4 text-center`}>
        {title}
      </h3>
      
      <p className={`${currentTheme.text} text-center leading-relaxed mb-6`}>
        {description}
      </p>
      
      <motion.button
        className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-2 rounded-full text-sm font-medium shadow-lg transform transition-transform duration-200 opacity-0 group-hover:opacity-100`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

const Services = () => {
  const { currentTheme } = useTheme();
  
  const services = [
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Custom-tailored strategies to expand your reach and engage with your target audience effectively across all social media platforms."
    },
    {
      icon: BadgeDollarSign,
      title: "Monetization",
      description: "Comprehensive monetization strategies including brand deals, sponsorships, and content optimization to maximize your earning potential."
    },
    {
      icon: GraduationCap,
      title: "Creator Education",
      description: "Access to workshops, masterclasses, and personalized mentorship programs to enhance your content creation skills."
    },
    {
      icon: Waypoints,
      title: "Networking",
      description: "Connect with industry professionals, fellow creators, and potential collaborators through our extensive network."
    },
    {
      icon: Target,
      title: "Brand Development",
      description: "Professional guidance in developing your personal brand identity and maintaining consistent messaging across platforms."
    },
    {
      icon: Megaphone,
      title: "Content Strategy",
      description: "Data-driven content planning and optimization to increase engagement and reach your target audience effectively."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Tools and strategies to build and nurture an engaged community around your content and brand."
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description: "Detailed analytics and insights to track your growth and optimize your content strategy for better results."
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      <br />
      <br />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h2
            className={`text-4xl font-bold ${currentTheme.accent} mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive Creator Services
          </motion.h2>
          <motion.p
            className={`${currentTheme.text} text-xl max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering creators with the tools, knowledge, and connections they need to thrive in the digital landscape
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={0.1 * index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;