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
      className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
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
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 p-8 rounded-xl backdrop-blur-sm">
            <TypewriterAnimation text="Welcome to COCAZ" />
            <p className="text-gray-200 mb-8">
              COCAZ is the Content Creation Association of Zimbabwe, dedicated to empowering and supporting content creators across various industries.
            </p>
            <div className="flex space-x-4">
              <MotionLink
                to="/signup"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-900 font-bold py-3 px-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </MotionLink>
              <MotionLink
                to="/about"
                className="bg-gradient-to-r from-green-700 to-green-800 text-yellow-400 font-bold py-3 px-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </MotionLink>
            </div>
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Camera, title: "Media Production", description: "Elevate your content with our media production services." },
              { icon: CalendarClock, title: "Event Management", description: "Let us handle the logistics of your events." },
              { icon: UserCheck, title: "Talent Management", description: "We empower and support content creators." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-xl p-4 flex flex-col items-center"
                variants={CardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="text-green-700 h-8 w-8 mb-2" />
                <h3 className="text-green-800 font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <MotionLink
                  to={`/services/${item.title.toLowerCase().replace(' ', '-')}`}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-md mt-auto shadow-md hover:from-green-700 hover:to-green-800"
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
        <div className="mt-16 bg-gradient-to-br from-green-800/50 to-green-900/50 p-8 rounded-xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Service History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "4+ Years of Experience", description: "COCAZ has been empowering content creators in Zimbabwe since 2020." },
              { icon: ThumbsUp, title: "Hundreds of Satisfied Clients", description: "Our members have experienced tremendous growth and success." },
              { icon: SquareCheckBig, title: "Successful Projects", description: "We've collaborated on numerous award-winning projects with our members." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-xl p-4 flex flex-col items-center"
                variants={CardVariants}
                initial="initial"
                whileHover="hover"
              >
                <item.icon className="text-green-700 h-8 w-8 mb-2" />
                <h3 className="text-green-800 font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <MotionLink
                  to={`/history/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-md mt-auto shadow-md hover:from-green-700 hover:to-green-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rest of the components with similar gradient enhancements... */}
        <InfluencerPage />

        {/* Social Media Section */}
        <div className="mt-16 bg-gradient-to-br from-green-800/50 to-green-900/50 p-8 rounded-xl backdrop-blur-sm">
          <h2 className="text-center text-3xl font-bold mb-4 text-yellow-400">Connect with Us</h2>
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
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full shadow-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="text-green-900 h-8 w-8" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;