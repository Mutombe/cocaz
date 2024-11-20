import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Coffee,
  Utensils,
  ShoppingBag,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  ArrowRight,
  Sparkles,
  Activity,
} from "lucide-react";
import { useTheme } from "@/components/themeContext";

const ProjectMetric = ({ label, value, prefix = "" }) => {
  const { currentTheme } = useTheme();
  return (
    <div className={`${currentTheme.card} p-4 rounded-lg`}>
      <p className={`${currentTheme.text} text-sm`}>{label}</p>
      <p className={`${currentTheme.accent} text-xl font-bold`}>
        {prefix}
        {value}
      </p>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className={`${currentTheme.card} p-6 rounded-xl shadow-lg overflow-hidden`}
    >
      <motion.div className="flex items-center mb-4">
        <div className={`${currentTheme.secondary} p-3 rounded-full`}>
          <project.icon className={`${currentTheme.buttonText} w-6 h-6`} />
        </div>
        <h3 className={`${currentTheme.accent} text-2xl font-bold ml-3`}>
          {project.name}
        </h3>
      </motion.div>

      <p className={`${currentTheme.text} text-lg mb-4`}>
        {project.description}
      </p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mb-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((metric, index) => (
                <ProjectMetric key={index} {...metric} />
              ))}
            </div>

            <div className={`${currentTheme.card} p-4 rounded-lg`}>
              <h4 className={`${currentTheme.accent} font-semibold mb-2`}>
                Key Achievements
              </h4>
              <ul className={`${currentTheme.text} space-y-2`}>
                {project.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Sparkles
                      className={`${currentTheme.accent} w-4 h-4 mr-2 flex-shrink-0`}
                    />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${currentTheme.button} ${currentTheme.buttonText} w-full py-2 px-4 rounded-full font-semibold flex items-center justify-center`}
      >
        <span>{isExpanded ? "Show Less" : "View Case Study"}</span>
        <ArrowRight
          className={`ml-2 transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </motion.button>
    </motion.div>
  );
};

const SuccessfulProjects = () => {
  const { currentTheme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      name: "CoolSplash",
      icon: Coffee,
      category: "beverage",
      description:
        "Innovative marketing campaigns for the drink manufacturing giant",
      metrics: [
        { label: "Social Media Growth", value: "300%", prefix: "+" },
        { label: "Engagement Rate", value: "25%", prefix: "" },
        { label: "Market Share Increase", value: "15%", prefix: "+" },
        { label: "Campaign ROI", value: "450%", prefix: "" },
      ],
      achievements: [
        "Launched viral social media campaign reaching 2M+ views",
        "Successfully introduced 3 new product lines",
        "Increased youth market penetration by 40%",
      ],
    },
    {
      name: "Sunsoya",
      icon: Utensils,
      category: "food",
      description:
        "Digital presence boost for the cooking oil manufacturing leader",
      metrics: [
        { label: "Brand Awareness", value: "250%", prefix: "+" },
        { label: "Sales Increase", value: "35%", prefix: "+" },
        { label: "Customer Retention", value: "85%", prefix: "" },
        { label: "Market Coverage", value: "65%", prefix: "" },
      ],
      achievements: [
        "Established market leadership in 3 new regions",
        "Created award-winning digital campaign",
        "Developed successful influencer partnership program",
      ],
    },
    {
      name: "Steers",
      icon: ShoppingBag,
      category: "restaurant",
      description:
        "Engaging content strategies for the restaurant and fast food chain",
      metrics: [
        { label: "Online Orders", value: "400%", prefix: "+" },
        { label: "Customer Satisfaction", value: "92%", prefix: "" },
        { label: "App Downloads", value: "50K", prefix: "" },
        { label: "Revenue Growth", value: "45%", prefix: "+" },
      ],
      achievements: [
        "Successful launch of mobile ordering platform",
        "Implemented loyalty program with 100K+ members",
        "Increased average order value by 25%",
      ],
    },
    {
      name: "FreshMart",
      icon: ShoppingBag,
      category: "retail",
      description:
        "Digital transformation for Zimbabwe`s leading grocery retailer",
      metrics: [
        { label: "Digital Sales", value: "200%", prefix: "+" },
        { label: "Customer Base", value: "75K", prefix: "" },
        { label: "Store Traffic", value: "40%", prefix: "+" },
        { label: "Brand Value", value: "85%", prefix: "+" },
      ],
      achievements: [
        "Launched successful e-commerce platform",
        "Implemented digital loyalty program",
        "Increased store footfall through digital marketing",
      ],
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Beverage", value: "beverage" },
    { label: "Food", value: "food" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Retail", value: "retail" },
  ];

  const filteredProjects = projects.filter(
    (project) => selectedFilter === "all" || project.category === selectedFilter
  );

  const stats = [
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: TrendingUp, label: "Average Growth", value: "150%" },
    { icon: Users, label: "Active Clients", value: "50+" },
    { icon: DollarSign, label: "Revenue Generated", value: "$10M+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Activity className={`${currentTheme.accent} w-12 h-12 mr-4`} />
            <h2 className={`text-4xl font-bold ${currentTheme.accent}`}>
              COCAZ Success Stories
            </h2>
          </div>
          <p className={`${currentTheme.text} text-xl max-w-3xl mx-auto`}>
            Discover how we've helped Zimbabwe's leading brands transform their
            digital presence and achieve remarkable growth through innovative
            marketing strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${currentTheme.card} p-6 rounded-xl text-center`}
            >
              <stat.icon
                className={`${currentTheme.accent} w-8 h-8 mx-auto mb-3`}
              />
              <h3 className={`${currentTheme.accent} text-2xl font-bold mb-1`}>
                {stat.value}
              </h3>
              <p className={`${currentTheme.text} text-sm`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                selectedFilter === filter.value
                  ? currentTheme.button
                  : `${currentTheme.card} hover:opacity-80`
              } px-6 py-2 rounded-full font-semibold transition-all duration-300`}
              onClick={() => setSelectedFilter(filter.value)}
            >
              <span
                className={
                  selectedFilter === filter.value
                    ? currentTheme.buttonText
                    : currentTheme.accent
                }
              >
                {filter.label}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessfulProjects;
