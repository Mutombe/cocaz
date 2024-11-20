import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../Hero/hero";
import {
  Camera,
  CalendarClock,
  UsersRound,
  Star,
  ThumbsUp,
  Instagram,
  Facebook,
  Twitter,
  Award,
  UserCheck,
  BarChart,
  SquareCheckBig,
} from "lucide-react";
import { useTheme } from "../themeContext";
import InfluencerPage from "../Influencers/influencers";

const MotionLink = motion(Link);


const CardVariants1 = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const ServiceHistorySection = () => {
  const { currentTheme } = useTheme();

  const serviceCards = [
    {
      icon: Star,
      title: "4+ Years of Experience",
      description: "COCAZ has been empowering content creators in Zimbabwe since 2020.",
      bgImage: "../assets/logo3.jpeg",
    },
    {
      icon: ThumbsUp,
      title: "Hundreds of Satisfied Clients",
      description: "Our members have experienced tremendous growth and success.",
      bgImage: "../assets/logo4.jpeg",
    },
    {
      icon: SquareCheckBig,
      title: "Successful Projects",
      description: "We've collaborated on numerous award-winning projects with our members.",
      bgImage: "../assets/logo.jpeg",
    },
  ];

  return (
    <div className={`relative ${currentTheme.card} rounded-xl backdrop-blur-sm overflow-hidden p-10 w-full`}>
      <div className="relative z-10">
        <h2 className={`text-3xl font-bold mb-4 ${currentTheme.accent}`}>
          Our Service History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {serviceCards.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-xl"
              variants={CardVariants1}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Background Image with Enhanced Blending */}
              <div
                className="rounded-lg absolute inset-0 bg-cover bg-center transform scale-105 group-hover:scale-110 transition-transform duration-300 ease-in-out blur-[2px] group-hover:blur-[1px]"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px"
                }}
              />

              {/* Theme-based Overlay */}
              <div className={`absolute inset-0 ${currentTheme.card} opacity-80 rounded-lg`} />

              {/* Content Container */}
              <div className="relative z-10 p-6 text-center rounded-lg">
                {/* Icon with Theme Accent */}
                <div className="relative z-20 mb-4">
                  <item.icon
                    className={`${currentTheme.accent} h-12 w-12 mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                  />
                </div>

                {/* Title */}
                <h3 className={`relative z-20 text-xl font-bold mb-2 ${currentTheme.text} drop-shadow-md`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`relative z-20 ${currentTheme.text} text-sm mb-4 leading-relaxed drop-shadow-md opacity-90`}>
                  {item.description}
                </p>

                {/* Themed Button */}
                <MotionLink
                  to={`/history/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative z-20 inline-block ${currentTheme.button} ${currentTheme.buttonText} px-6 py-2 rounded-md shadow-lg transition-all duration-300 ease-in-out`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardVariants = {
  initial: { scale: 1, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};


const BackgroundImage = ({ src, opacity = 0.15 }) => (
  <div
    className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden"
    style={{
      backgroundImage: `url(${src})`,
      opacity,
      mixBlendMode: "overlay",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-800/90" />
  </div>
);

const Home = () => {
  const { theme, currentTheme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen">
      <br />
      <br />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <Hero />
        <br />
        <ServiceHistorySection />
        <InfluencerPage />

        {/* Social Media Section with Floating Animation */}
        <div className="mt-16 relative bg-gradient-to-br from-green-800/50 to-green-900/50 p-8 rounded-xl backdrop-blur-sm overflow-hidden">
          <BackgroundImage src="../assets/zam1.jpeg" />
          <div className="relative z-10">
            <h2 className={`text-center text-3xl font-bold mb-4  ${currentTheme.accent}`}>
              Connect with Us
            </h2>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/cocaz_official/",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/cocaz.official",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Twitter,
                  link: "https://twitter.com/cocaz_official",
                  color: "from-sky-400 to-sky-500",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${item.color} p-3 rounded-full shadow-lg`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2,
                  }}
                >
                  <item.icon className="text-white h-8 w-8" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
