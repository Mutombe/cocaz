import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChevronDown,
  ChevronUp,
  Award,
  Building,
  Users,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "@/components/themeContext";

const Experience = () => {
  const { currentTheme } = useTheme();
  const [expandedYear, setExpandedYear] = useState(null);

  const timelineData = [
    {
      year: 2020,
      event: "COCAZ founded",
      icon: Building,
      details:
        "COCAZ was established with the vision of connecting Zimbabwean content creators with businesses seeking innovative marketing solutions.",
    },
    {
      year: 2021,
      event: "Expanded to 100+ content creators",
      icon: Users,
      details:
        "Our network grew significantly, allowing us to offer a diverse range of influencers across various niches.",
    },
    {
      year: 2022,
      event: "Launched talent management services",
      icon: Award,
      details:
        "We expanded our offerings to include comprehensive talent management for top-tier content creators.",
    },
    {
      year: 2023,
      event: "Partnership with CoolSplash",
      icon: Building,
      details:
        "We initiated our first major partnership with CoolSplash, setting the stage for numerous successful marketing campaigns.",
    },
    {
      year: 2024,
      event: "Collaboration with Simuka Upenye",
      icon: Users,
      details:
        "A major milestone that showcases our expertise and the trust businesses place in our services.",
    },
    {
      year: 2024,
      event: "Partnership with Sunsoya",
      icon: Building,
      details:
        "We partnered with Sunsoya to help the company establish its presence in the digital space.",
    },
    {
      year: 2024,
      event: "Merging Zambian and Zimbabwean Content",
      icon: TrendingUp,
      details:
        "We merged our network with Zambian and Zimbabwean content creators, providing an Afrocentric Experience to content consumers",
    },
  ];

  const approachData = [
    {
      name: "Tailored Matchmaking",
      value: 95,
      description: "Custom-fit partnerships between brands and creators",
    },
    {
      name: "Campaign Strategy",
      value: 90,
      description: "Data-driven campaign planning and execution",
    },
    {
      name: "Contract Negotiation",
      value: 85,
      description: "Fair and transparent agreement facilitation",
    },
    {
      name: "Performance Tracking",
      value: 92,
      description: "Real-time analytics and reporting",
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`${currentTheme.card} p-4 rounded-lg shadow-lg`}>
          <p className={`${currentTheme.accent} font-bold`}>
            {payload[0].payload.name}
          </p>
          <p className={`${currentTheme.text}`}>
            {payload[0].value}% Success Rate
          </p>
          <p className={`${currentTheme.text} text-sm mt-1`}>
            {payload[0].payload.description}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <br />
        <br />
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={`text-5xl font-bold ${currentTheme.accent} mb-6`}>
            Our Experience
          </h1>
          <p className={`${currentTheme.text} text-xl max-w-3xl mx-auto`}>
            Since 2020, COCAZ has been pioneering innovative connections between
            content creators and businesses across Zimbabwe and beyond.
          </p>
        </motion.div>

        <div className="relative mb-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className={`${currentTheme.card} cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
                onClick={() =>
                  setExpandedYear(expandedYear === item.year ? null : item.year)
                }
              >
                <div className="flex items-center p-6">
                  <div
                    className={`${currentTheme.accent} w-24 text-right pr-4 font-bold`}
                  >
                    {item.year}
                  </div>
                  <div className={`${currentTheme.secondary} p-2 rounded-full`}>
                    <item.icon
                      className={`w-6 h-6 ${currentTheme.buttonText}`}
                    />
                  </div>
                  <div className={`flex-1 pl-4 ${currentTheme.text}`}>
                    {item.event}
                  </div>
                  {expandedYear === item.year ? (
                    <ChevronUp className={`w-5 h-5 ${currentTheme.accent}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${currentTheme.accent}`} />
                  )}
                </div>
                <AnimatePresence>
                  {expandedYear === item.year && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`px-6 pb-6 pl-40 ${currentTheme.text}`}
                    >
                      {item.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-current opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${currentTheme.card} rounded-xl p-8 mb-24`}
        >
          <h2 className={`text-3xl font-bold ${currentTheme.accent} mb-6`}>
            Notable Partnership
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3
                className={`text-2xl font-semibold ${currentTheme.accent} mb-4`}
              >
                Sunsoya
              </h3>
              <p className={`${currentTheme.text} mb-6`}>
                Our partnership with Sunsoya has yielded remarkable results,
                driving significant brand awareness and engagement across
                digital platforms. Through strategic influencer collaborations,
                we've helped establish Sunsoya as a prominent brand in the
                digital space.
              </p>
              <motion.button
                className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-3 rounded-full font-bold`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Study
              </motion.button>
            </div>
            <div className="w-full md:w-1/3">
              <div className={`${currentTheme.card} p-4 rounded-xl`}>
                <img
                  src="/api/placeholder/400/300"
                  alt="Sunsoya Partnership"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${currentTheme.card} rounded-xl p-8`}
        >
          <h2 className={`text-3xl font-bold ${currentTheme.accent} mb-6`}>
            Our Approach
          </h2>
          <div className="h-80">
            <ResponsiveContainer>
              <BarChart data={approachData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={150}
                  tick={{ fill: currentTheme.accent.replace("text-", "") }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="value"
                  fill={currentTheme.accent.replace("text-", "")}
                  label={{
                    position: "right",
                    fill: currentTheme.accent.replace("text-", ""),
                    formatter: (value) => `${value}%`,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
