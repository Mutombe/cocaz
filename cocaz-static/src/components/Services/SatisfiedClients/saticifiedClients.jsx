import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/themeContext";

const StatCard = ({ icon: Icon, label, value }) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      className={`${currentTheme.card} p-6 rounded-xl shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`${currentTheme.accent} w-8 h-8 mb-4`} />
      <h3 className={`${currentTheme.accent} text-2xl font-bold mb-2`}>
        {value}
      </h3>
      <p className={`${currentTheme.text} text-sm`}>{label}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author, rating, onNext, onPrev }) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      className={`${currentTheme.card} p-8 rounded-xl shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onPrev}
          className={`${currentTheme.accent} hover:opacity-75`}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <button
          onClick={onNext}
          className={`${currentTheme.accent} hover:opacity-75`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <p className={`${currentTheme.text} text-lg italic mb-4`}>"{quote}"</p>
      <p className={`${currentTheme.accent} font-semibold`}>- {author}</p>
    </motion.div>
  );
};

const ClientCard = ({ client, isExpanded, onToggle }) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      className={`${currentTheme.card} rounded-xl shadow-lg overflow-hidden cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`${currentTheme.secondary} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}
          >
            {client.logo}
          </div>
          <h3 className={`${currentTheme.accent} text-xl font-semibold ml-4`}>
            {client.name}
          </h3>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              className={`${currentTheme.text} space-y-2 mb-4`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {client.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center"
                >
                  <div
                    className={`${currentTheme.secondary} w-2 h-2 rounded-full mr-3`}
                  />
                  {achievement}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <div className={`flex items-center ${currentTheme.accent}`}>
          <span className="mr-2">
            {isExpanded ? "Hide details" : "View details"}
          </span>
          <ArrowRight
            size={16}
            className={`transform transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const EnhancedSatisfiedClients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedClient, setExpandedClient] = useState(null);
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "50+" },
    { icon: TrendingUp, label: "Growth Rate", value: "200%" },
    { icon: MessageCircle, label: "Positive Reviews", value: "1000+" },
  ];

  const clientSuccesses = [
    {
      name: "Sunsoya",
      logo: "🌞",
      achievements: [
        "Increase brand awareness by 150% among their target demographic",
        "Boost engagement rates on social media by 200%",
        "Drive a 75% increase in online sales during campaign periods",
      ],
      quote:
        "COCAZ has been instrumental in helping us connect with our audience in an authentic and impactful way.",
      author: "Marketing Director, Sunsoya",
    },
    {
      name: "Master H",
      logo: "🎵",
      achievements: [
        "Increased social media following by 300% in 6 months",
        "Secured 5 major brand endorsement deals",
        "Produced and promoted a chart-topping album",
      ],
      quote:
        "COCAZ took my career to the next level. Their guidance and connections in the industry have been priceless.",
      author: "Master H",
    },
    {
      name: "Jah Signal",
      logo: "🎤",
      achievements: [
        "Doubled monthly listeners on streaming platforms",
        "Successful launch of a clothing line",
        "Coordinated international collaborations",
      ],
      quote:
        "COCAZ's expertise in talent management has been crucial to my success.",
      author: "Jah Signal",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % clientSuccesses.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + clientSuccesses.length) % clientSuccesses.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={`text-5xl font-bold ${currentTheme.accent} mb-6`}>
            Our Satisfied Clients
          </h1>
          <p className={`${currentTheme.text} text-xl max-w-3xl mx-auto`}>
            Join hundreds of successful businesses and creators who have
            transformed their digital presence with COCAZ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold ${currentTheme.accent} mb-8 text-center`}
          >
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientSuccesses.map((client, index) => (
              <ClientCard
                key={client.name}
                client={client}
                isExpanded={expandedClient === index}
                onToggle={() =>
                  setExpandedClient(expandedClient === index ? null : index)
                }
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold ${currentTheme.accent} mb-8 text-center`}
          >
            What Our Clients Say
          </h2>
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentTestimonial}
              quote={clientSuccesses[currentTestimonial].quote}
              author={clientSuccesses[currentTestimonial].author}
              rating={5}
              onNext={nextTestimonial}
              onPrev={prevTestimonial}
            />
          </AnimatePresence>
        </div>

        <motion.div
          className={`${currentTheme.card} p-12 rounded-xl text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className={`text-3xl font-bold ${currentTheme.accent} mb-6`}>
            Ready to Transform Your Digital Presence?
          </h2>
          <p className={`${currentTheme.text} text-lg mb-8`}>
            Join our community of successful clients and take your brand to the
            next level
          </p>
          <motion.button
            className={`${currentTheme.button} ${currentTheme.buttonText} px-8 py-4 rounded-full text-lg font-semibold`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnhancedSatisfiedClients;
