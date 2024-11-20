import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/themeContext";
import {
  Film,
  Video,
  Camera,
  Edit,
  PenTool,
  Play,
  Award,
  Star,
  ChevronRight,
  Youtube,
  Clock,
  Users,
} from "lucide-react";

const MediaProduction = () => {
  const { currentTheme } = useTheme();
  const [activeService, setActiveService] = useState(null);
  const [hoveredStats, setHoveredStats] = useState(null);

  const statistics = [
    {
      icon: Film,
      value: "50+",
      label: "Productions Completed",
      description: "Successful film and TV projects delivered",
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence in media production",
    },
    {
      icon: Users,
      value: "100k+",
      label: "Viewers Reached",
      description: "Growing audience across multiple platforms",
    },
    {
      icon: Clock,
      value: "10+ Years",
      label: "Industry Experience",
      description: "Decade of media production expertise",
    },
  ];

  const services = [
    {
      icon: Film,
      name: "Film and TV Production",
      description:
        "From concept to screen, we bring stories to life with our full-service film and TV production.",
      features: [
        "Script Development",
        "Location Scouting",
        "Full Production Crew",
        "High-End Equipment",
      ],
      image: "/f&tv.png",
    },
    {
      icon: Video,
      name: "Music Video Production",
      description:
        "Create visually stunning music videos that capture the essence of your music.",
      features: [
        "Creative Direction",
        "Choreography",
        "Color Grading",
        "Special Effects",
      ],
      image: "/m&vid.jpg",
    },
    {
      icon: Camera,
      name: "Commercial Production",
      description:
        "Engage your audience with high-quality commercial and corporate videos.",
      features: [
        "Brand Integration",
        "Market Research",
        "Distribution Strategy",
        "Analytics",
      ],
      image: "/com.jpg",
    },
    {
      icon: Film,
      name: "Documentary Filmmaking",
      description:
        "Tell compelling real-life stories through our expert documentary filmmaking services.",
      features: [
        "Research",
        "Interview Setup",
        "Archive Integration",
        "Narrative Structure",
      ],
      image: "/docu.jpg",
    },
    {
      icon: Edit,
      name: "Post-Production",
      description:
        "Polish your project to perfection with our state-of-the-art post-production and editing services.",
      features: [
        "Video Editing",
        "Sound Design",
        "Color Correction",
        "Visual Effects",
      ],
      image: "/post.png",
    },
    {
      icon: PenTool,
      name: "Animation",
      description:
        "Bring your ideas to life with captivating animation and motion graphics.",
      features: [
        "2D Animation",
        "3D Modeling",
        "Character Design",
        "Motion Graphics",
      ],
      image: "/anim.webp",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${currentTheme.primary}`}
    >
      <br />
      <br />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold mb-6 ${currentTheme.accent}`}>
            Media Production Services
          </h1>
          <p className={`text-xl ${currentTheme.text} max-w-3xl mx-auto`}>
            Crafting compelling visual stories that captivate audiences and
            elevate brands across Zimbabwe and beyond.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className={`${currentTheme.card} rounded-xl p-6 text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredStats(index)}
              onHoverEnd={() => setHoveredStats(null)}
            >
              <stat.icon
                className={`w-8 h-8 mx-auto mb-4 ${currentTheme.accent}`}
              />
              <h3 className={`text-3xl font-bold mb-2 ${currentTheme.accent}`}>
                {stat.value}
              </h3>
              <p className={`${currentTheme.text} font-medium`}>{stat.label}</p>
              <AnimatePresence>
                {hoveredStats === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-black/80 flex items-center justify-center p-4"
                  >
                    <p className="text-white text-sm">{stat.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Featured Project */}
        <motion.div
          className={`${currentTheme.card} rounded-2xl shadow-2xl overflow-hidden mb-20`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2
                  className={`text-3xl font-bold mb-4 ${currentTheme.accent}`}
                >
                  Featured: Mandi
                </h2>
                <div className={`space-y-4 ${currentTheme.text}`}>
                  <p>
                    A powerful film drawing inspiration from "The Woman King,"
                    set in pre-colonial Zimbabwe.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Fearless female warrior protagonist
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Breathtaking battle sequences
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Rich cultural storytelling
                    </li>
                  </ul>
                  <motion.button
                    className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-3 rounded-full flex items-center space-x-2 mt-6`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch Trailer</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/mandi.jpeg"
                alt="Mandi Movie Poster"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <h2 className={`text-3xl font-bold mb-8 ${currentTheme.accent}`}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className={`${currentTheme.card} rounded-xl overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <service.icon
                  className={`absolute bottom-4 left-4 w-8 h-8 ${currentTheme.accent}`}
                />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${currentTheme.accent}`}>
                  {service.name}
                </h3>
                <p className={`${currentTheme.text} mb-4`}>
                  {service.description}
                </p>
                <motion.button
                  className={`${currentTheme.button} ${currentTheme.buttonText} px-4 py-2 rounded-full text-sm flex items-center space-x-2`}
                  onClick={() =>
                    setActiveService(activeService === index ? null : index)
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      <ul className={`space-y-2 ${currentTheme.text}`}>
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <Star
                              className={`w-4 h-4 ${currentTheme.accent}`}
                            />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className={`${currentTheme.card} rounded-xl mt-20 p-8 text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className={`text-3xl font-bold mb-4 ${currentTheme.accent}`}>
            Ready to Begin Your Project?
          </h2>
          <p className={`${currentTheme.text} mb-6 max-w-2xl mx-auto`}>
            Let's create something extraordinary together. Our team is ready to
            bring your vision to life.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-3 rounded-full flex items-center space-x-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube className="w-5 h-5" />
              <span>View Our Work</span>
            </motion.button>
            <motion.button
              className={`${currentTheme.secondary} ${currentTheme.buttonText} px-6 py-3 rounded-full flex items-center space-x-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-5 h-5" />
              <span>Start a Project</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MediaProduction;
