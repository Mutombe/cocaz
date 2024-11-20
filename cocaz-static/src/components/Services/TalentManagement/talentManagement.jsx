import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/themeContext";
import {
  Mic,
  Music,
  Award,
  TrendingUp,
  Briefcase,
  DollarSign,
  Star,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";

const TalentManagement = () => {
  const { currentTheme } = useTheme();
  const [selectedApproach, setSelectedApproach] = useState(null);
  const [activeTab, setActiveTab] = useState("featured");

  const featuredArtists = [
    {
      name: "Master H",
      genre: "Dancehall",
      achievements: "3x Award Winner",
      description:
        "Master H has been making waves in the Zimbabwean dancehall scene with his unique blend of hard-hitting lyrics and infectious rhythms.",
      stats: { followers: "250K", shows: "150+", releases: "25" },
    },
    {
      name: "Jah Signal",
      genre: "Dancehall",
      achievements: "Chart-Topping Artist",
      description:
        "Jah Signal has become a household name in Zimbabwe's dancehall community, collaborating with international artists.",
      stats: { followers: "300K", shows: "200+", releases: "30" },
    },
  ];

  const managementApproach = [
    {
      title: "Career Strategy",
      icon: TrendingUp,
      description:
        "Comprehensive career planning and development strategies tailored to each artist's unique goals and potential.",
    },
    {
      title: "Brand Development",
      icon: Award,
      description:
        "Strategic brand building and positioning to establish a strong, memorable presence in the industry.",
    },
    {
      title: "Tour Management",
      icon: Music,
      description:
        "End-to-end tour planning, from venue booking to logistics coordination and performance management.",
    },
    {
      title: "Media Relations",
      icon: Mic,
      description:
        "Strategic media placement, interview coaching, and public relations management for maximum visibility.",
    },
    {
      title: "Digital Strategy",
      icon: Briefcase,
      description:
        "Comprehensive digital presence management including social media, content strategy, and online engagement.",
    },
    {
      title: "Financial Planning",
      icon: DollarSign,
      description:
        "Professional guidance on revenue management, investment planning, and sustainable career growth.",
    },
  ];

  const ArtistCard = ({ artist }) => (
    <motion.div
      className={`${currentTheme.card} rounded-xl overflow-hidden shadow-xl`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className={`text-2xl font-bold ${currentTheme.accent}`}>
              {artist.name}
            </h3>
            <p className={`${currentTheme.text} opacity-75`}>{artist.genre}</p>
          </div>
          <span
            className={`${currentTheme.secondary} ${currentTheme.buttonText} px-3 py-1 rounded-full text-sm`}
          >
            {artist.achievements}
          </span>
        </div>

        <p className={`${currentTheme.text} mb-6`}>{artist.description}</p>

        <div className="grid grid-cols-3 gap-4">
          {Object.entries(artist.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <p className={`${currentTheme.accent} text-xl font-bold`}>
                {value}
              </p>
              <p className={`${currentTheme.text} text-sm capitalize`}>{key}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ApproachCard = ({ approach, index }) => (
    <motion.div
      className={`${currentTheme.card} rounded-xl overflow-hidden cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      onClick={() =>
        setSelectedApproach(selectedApproach === index ? null : index)
      }
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`${currentTheme.secondary} p-3 rounded-full`}>
            <approach.icon className={`w-6 h-6 ${currentTheme.buttonText}`} />
          </div>
          <h3 className={`${currentTheme.accent} text-lg font-bold`}>
            {approach.title}
          </h3>
        </div>

        <AnimatePresence>
          {selectedApproach === index && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`${currentTheme.text} mt-2`}
            >
              {approach.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <br />
        <br />
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-5xl font-bold ${currentTheme.accent} mb-4`}
          >
            Talent Management
          </motion.h1>
          <p className={`${currentTheme.text} text-xl max-w-3xl mx-auto`}>
            Empowering Zimbabwe's creative voices through strategic management
            and innovative opportunities
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("featured")}
            className={`${
              activeTab === "featured" ? currentTheme.button : currentTheme.card
            } 
              px-6 py-3 rounded-full font-semibold transition-all duration-300`}
          >
            Featured Artists
          </button>
          <button
            onClick={() => setActiveTab("approach")}
            className={`${
              activeTab === "approach" ? currentTheme.button : currentTheme.card
            } 
              px-6 py-3 rounded-full font-semibold transition-all duration-300`}
          >
            Our Approach
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "featured" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {featuredArtists.map((artist, index) => (
                <ArtistCard key={index} artist={artist} />
              ))}
            </motion.div>
          )}

          {activeTab === "approach" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {managementApproach.map((approach, index) => (
                <ApproachCard key={index} approach={approach} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className={`${currentTheme.card} rounded-xl p-8 text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className={`text-3xl font-bold ${currentTheme.accent} mb-4`}>
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className={`${currentTheme.text} mb-6 max-w-2xl mx-auto`}>
            Join COCAZ's roster of exceptional talent and let us help you
            achieve your artistic vision through strategic management and
            innovative opportunities.
          </p>
          <motion.button
            className={`${currentTheme.button} ${currentTheme.buttonText} px-8 py-3 rounded-full font-bold text-lg
              flex items-center gap-2 mx-auto`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TalentManagement;
