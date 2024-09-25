import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, CalendarClock, UsersRound, Star, ThumbsUp, Instagram, Facebook, Twitter, Award, UserCheck, BarChart, SquareCheckBig } from 'lucide-react';
import InfluencerPage from '../Influencers/influencers';

const MotionLink = motion(Link);

const CardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const TypewriterAnimation = ({ text }) => {
  return (
    <motion.h1
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Home = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <TypewriterAnimation text="Welcome to COCAZ" />
            <p className="text-gray-200 mb-8">
              COCAZ is the Content Creation Association of Zimbabwe, dedicated to empowering and supporting content creators across various industries.
            </p>
            <div className="flex space-x-4">
              <MotionLink
                to="/signup"
                className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-3 px-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </MotionLink>
              <MotionLink
                to="/about"
                className="text-[#FFD500] hover:text-[#DDB200] font-bold py-3 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </MotionLink>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Camera, title: "Media Production", description: "Elevate your content with our media production services." },
              { icon: CalendarClock, title: "Event Management", description: "Let us handle the logistics of your events." },
              { icon: UserCheck, title: "Talent Management", description: "We empower and support content creators." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                variants={CardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="text-[#318000] h-8 w-8 mb-2" />
                <h3 className="text-[#318000] font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <MotionLink
                  to={`/services/${item.title.toLowerCase().replace(' ', '-')}`}
                  className="bg-[#318000] text-white px-4 py-2 rounded-md mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service History */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Service History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "4+ Years of Experience", description: "COCAZ has been empowering content creators in Zimbabwe since 2020." },
              { icon: ThumbsUp, title: "Hundreds of Satisfied Clients", description: "Our members have experienced tremendous growth and success." },
              { icon: SquareCheckBig, title: "Successful Projects", description: "We've collaborated on numerous award-winning projects with our members." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                variants={CardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="text-[#318000] h-8 w-8 mb-2" />
                <h3 className="text-[#318000] font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <MotionLink
                  to={`/history/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-[#318000] text-white px-4 py-2 rounded-md mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Accolades */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Industry Awards", description: "COCAZ has been recognized for its outstanding contribution to the content creation industry." },
              { icon: UserCheck, title: "Trusted by Creators", description: "Our members trust us to guide and support their content creation journeys." },
              { icon: BarChart, title: "Impressive Growth", description: "We've helped our members achieve remarkable growth in their careers and businesses." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                variants={CardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="text-[#318000] h-8 w-8 mb-2" />
                <h3 className="text-[#318000] font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <MotionLink
                  to={`/achievements/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-[#318000] text-white px-4 py-2 rounded-md mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover More
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </div>

        <InfluencerPage />

        {/* Social Media */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { icon: Instagram, link: "https://www.instagram.com/cocaz_official/" },
              { icon: Facebook, link: "https://www.facebook.com/cocaz.official" },
              { icon: Twitter, link: "https://twitter.com/cocaz_official" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="text-[#FFD500] h-8 w-8" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;