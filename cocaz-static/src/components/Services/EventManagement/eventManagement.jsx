import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import { useTheme } from "@/components/themeContext";
import {
  ChevronDown,
  Mic,
  Calendar,
  Briefcase,
  UsersRound,
  Music,
  Utensils,
  Camera,
  Users,
  Clock,
  Star,
  Sparkles,
} from "lucide-react";

const EventManagement = () => {
  const { currentTheme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedService, setExpandedService] = useState(null);

  const tabs = ["Overview", "MC Services", "Event Types", "Planning Services"];

  const services = [
    {
      name: "Venue Selection & Styling",
      description:
        "Transform any space into an enchanting venue that perfectly matches your vision.",
      icon: Calendar,
      features: ["Venue scouting", "Theme development", "Decor arrangement"],
    },
    {
      name: "Entertainment Booking",
      description:
        "Access our network of top performers to create unforgettable moments.",
      icon: Music,
      features: ["Live bands", "DJs", "Traditional performers"],
    },
    {
      name: "Culinary Excellence",
      description:
        "Partner with premier caterers to delight your guests with exceptional cuisine.",
      icon: Utensils,
      features: ["Custom menus", "Dietary accommodations", "Bar service"],
    },
    {
      name: "Technical Production",
      description:
        "State-of-the-art audio-visual solutions for flawless event execution.",
      icon: Camera,
      features: ["Sound systems", "Lighting design", "Visual effects"],
    },
    {
      name: "Guest Experience",
      description: "Comprehensive guest management for a seamless event flow.",
      icon: Users,
      features: ["RSVP management", "Seating arrangements", "VIP services"],
    },
    {
      name: "Event Coordination",
      description:
        "Expert on-site management ensuring every detail is perfect.",
      icon: Clock,
      features: [
        "Timeline planning",
        "Vendor coordination",
        "Emergency handling",
      ],
    },
  ];

  const ServiceCard = ({ service, index, isExpanded, onToggle }) => {
    return (
      <motion.div
        layout
        className={`${currentTheme.card} rounded-xl overflow-hidden shadow-lg`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <motion.button
          className={`w-full text-left p-4 flex items-center justify-between ${currentTheme.text}`}
          onClick={onToggle}
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${currentTheme.secondary}`}>
              <service.icon className={`w-6 h-6 ${currentTheme.buttonText}`} />
            </div>
            <span className="font-semibold">{service.name}</span>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className={`w-5 h-5 ${currentTheme.accent}`} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 pb-4"
            >
              <p className={`${currentTheme.text} mb-4`}>
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center space-x-2 ${currentTheme.text}`}
                  >
                    <Sparkles className={`w-4 h-4 ${currentTheme.accent}`} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-20"
    >
      <br />
      <br />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-16"
      >
        <h1 className={`text-5xl font-bold mb-4 ${currentTheme.accent}`}>
          Event Management
        </h1>
        <p className={`text-xl ${currentTheme.text} max-w-2xl mx-auto`}>
          Creating unforgettable experiences with precision and creativity
        </p>
      </motion.div>

      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-2 rounded-xl p-1 mb-8 bg-opacity-20 backdrop-blur-sm">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-200 ${
                  selected
                    ? `${currentTheme.secondary} ${currentTheme.buttonText} shadow-lg`
                    : `${currentTheme.text} hover:opacity-80`
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-4">
          <AnimatePresence mode="wait">
            {tabs.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className={`rounded-xl ${currentTheme.card} p-6 shadow-xl`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {idx === 0 && (
                    <div className="space-y-6">
                      <h2
                        className={`text-3xl font-bold ${currentTheme.accent} mb-4`}
                      >
                        Welcome to COCAZ Events
                      </h2>
                      <p
                        className={`${currentTheme.text} text-lg leading-relaxed`}
                      >
                        Experience the perfect blend of creativity and precision
                        in event management. Our team of seasoned professionals
                        transforms your vision into reality, ensuring every
                        detail is meticulously crafted for an unforgettable
                        experience.
                      </p>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="space-y-6">
                      <h2
                        className={`text-3xl font-bold ${currentTheme.accent} mb-4`}
                      >
                        Professional MC Services
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          "Corporate Events",
                          "Weddings",
                          "Social Gatherings",
                          "Award Ceremonies",
                        ].map((event, i) => (
                          <motion.div
                            key={i}
                            className={`${currentTheme.card} p-4 rounded-lg shadow-md`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="flex items-center space-x-3">
                              <Star className={currentTheme.accent} />
                              <span className={currentTheme.text}>{event}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="space-y-6">
                      <h2
                        className={`text-3xl font-bold ${currentTheme.accent} mb-4`}
                      >
                        Specialized Events
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { icon: UsersRound, name: "Weddings" },
                          { icon: Briefcase, name: "Corporate Events" },
                          { icon: Music, name: "Concerts" },
                          { icon: Star, name: "Galas" },
                          { icon: Users, name: "Conferences" },
                          { icon: Sparkles, name: "Special Occasions" },
                        ].map((event, i) => (
                          <motion.div
                            key={i}
                            className={`${currentTheme.card} p-6 rounded-lg shadow-md`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <event.icon
                              className={`w-8 h-8 ${currentTheme.accent} mb-3`}
                            />
                            <h3
                              className={`${currentTheme.text} font-semibold`}
                            >
                              {event.name}
                            </h3>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="space-y-6">
                      <h2
                        className={`text-3xl font-bold ${currentTheme.accent} mb-4`}
                      >
                        Our Services
                      </h2>
                      <div className="grid gap-4">
                        {services.map((service, index) => (
                          <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            isExpanded={expandedService === index}
                            onToggle={() =>
                              setExpandedService(
                                expandedService === index ? null : index
                              )
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </Tab.Panel>
            ))}
          </AnimatePresence>
        </Tab.Panels>
      </Tab.Group>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`mt-12 text-center ${currentTheme.text}`}
      >
        <p className="text-lg">
          Ready to create something extraordinary? Contact us today to begin
          planning your perfect event.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EventManagement;
