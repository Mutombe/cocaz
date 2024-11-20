import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Video as VideoIcon,
  X,
  Play,
  ImageIcon,
  Expand,
} from "lucide-react";
import { useTheme } from "../themeContext";

const LogoSVG = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#318000", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#5fd75f", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="url(#logoGradient)" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fill="white"
      >
        C
      </text>
    </svg>
  );
};

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [hoveredMedia, setHoveredMedia] = useState(null);
  const { currentTheme } = useTheme();
  const videoRefs = useRef({});

  const mediaItems = [
    {
      type: "image",
      src: "../assets/eventprep.jpg",
      alt: "COCAZ Event 1",
      caption: "Annual Content Creator Awards",
    },
    {
      type: "video",
      src: "../assets/cocazvid.mp4",
      alt: "COCAZ Event 2",
      caption: "Behind the Scenes: Bootcamp",
    },
    {
      type: "image",
      src: "../assets/camp.jpg",
      alt: "COCAZ Event 3",
      caption: "Community Networking for Content Creators",
    },
    {
      type: "image",
      src: "../assets/bootcamp3.jpg",
      alt: "COCAZ Event 6",
      caption: "Bootcamp for Content Creators",
    },
    {
      type: "image",
      src: "../assets/logo.jpeg",
      alt: "COCAZ Event 6",
      caption: "Logo Recreation",
    },
    {
      type: "image",
      src: "../assets/zam0.jpeg",
      alt: "COCAZ Event 6",
      caption: "Zim Content Merge with Zambian Creators",
    },
    {
      type: "image",
      src: "../assets/zam3.jpeg",
      alt: "COCAZ Event 6",
      caption: "Zim Content Merge with Zambian Creators",
    },
    {
      type: "image",
      src: "../assets/zam.jpeg",
      alt: "COCAZ Event 6",
      caption: "Zim Content Merge with Zambian Creators",
    },
    {
      type: "image",
      src: "../assets/zam1.jpeg",
      alt: "COCAZ Event 6",
      caption: "Zim Content Merge with Zambian Creators",
    },
    {
      type: "image",
      src: "../assets/camp2.jpg",
      alt: "COCAZ Event 4",
      caption: "Community Networking for Content Creators",
    },
    {
      type: "image",
      src: "../assets/camp3.jpg",
      alt: "COCAZ Event 6",
      caption: "Community Networking for Content Creators",
    },
    {
      type: "image",
      src: "../assets/boot-camp.jpg",
      alt: "COCAZ Event 6",
      caption: "Bootcamp for Content Creators",
    },
    {
      type: "image",
      src: "../assets/bootcamp2.jpg",
      alt: "COCAZ Event 6",
      caption: "Bootcamp for Content Creators",
    },
    {
      type: "image",
      src: "../assets/bootcamp4.jpg",
      alt: "COCAZ Event 6",
      caption: "Bootcamp for Content Creators",
    },
  ];

  const handleVideoPlay = (index) => {
    // Pause all other videos
    Object.keys(videoRefs.current).forEach((key) => {
      if (key !== index.toString() && videoRefs.current[key]) {
        videoRefs.current[key].pause();
      }
    });
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={galleryVariants}
      className={`container mx-auto px-4 py-20 ${currentTheme.text} relative`}
    >
      <br />
      <br />
      <motion.h1
        className={`text-4xl font-bold mb-6 ${currentTheme.accent}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        COCAZ Event Gallery
      </motion.h1>

      <motion.p
        className={`mb-8 ${currentTheme.text} opacity-80`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      >
        Explore the vibrant world of COCAZ through our event gallery. From award
        ceremonies to behind-the-scenes footage, witness the energy and
        creativity that define our community.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={galleryVariants}
      >
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative cursor-pointer group overflow-hidden rounded-lg"
            onHoverStart={() => setHoveredMedia(index)}
            onHoverEnd={() => setHoveredMedia(null)}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "video" ? (
                <>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    onPlay={() => handleVideoPlay(index)}
                    muted
                    loop
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div
                    className={`absolute bottom-0 left-0 p-2 ${currentTheme.button} text-white rounded-br-lg`}
                    onClick={() => setSelectedMedia(item)}
                  >
                    <Play className="w-6 h-6 opacity-80" />
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div
                    className={`absolute bottom-0 left-0 p-2 ${currentTheme.button} text-white rounded-br-lg`}
                  >
                    <Camera className="w-6 h-6 opacity-80" />
                  </div>
                </>
              )}

              <motion.div
                className={`absolute inset-0 ${currentTheme.primary} bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredMedia === index ? 1 : 0 }}
              >
                <div className="text-center p-4">
                  <p className="text-white font-medium mb-2">{item.caption}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.button
                      className={`${currentTheme.button} ${currentTheme.buttonText} px-3 py-1 rounded-full flex items-center space-x-2`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedMedia(item)}
                    >
                      {item.type === "video" ? (
                        <VideoIcon size={18} />
                      ) : (
                        <ImageIcon size={18} />
                      )}
                      <span>View</span>
                    </motion.button>
                    <motion.button
                      className={`${currentTheme.secondary} ${currentTheme.buttonText} px-3 py-1 rounded-full flex items-center space-x-2`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Expand size={18} />
                      <span>Fullscreen</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* COCAZ Logo */}
      <motion.div
        className="fixed bottom-4 left-4 z-20 w-20 h-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <LogoSVG
          className={`w-full h-full ${currentTheme.accent} opacity-80 hover:opacity-100 transition-opacity`}
        />
      </motion.div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${currentTheme.primary} bg-opacity-75 flex items-center justify-center z-50`}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`${currentTheme.card} p-6 rounded-2xl max-w-4xl w-full mx-4 relative overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                    autoPlay
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                )}

                <p
                  className={`mt-4 text-center ${currentTheme.text} font-medium`}
                >
                  {selectedMedia.caption}
                </p>

                <motion.button
                  className={`absolute top-2 right-2 ${currentTheme.button} ${currentTheme.buttonText} rounded-full p-2`}
                  onClick={() => setSelectedMedia(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Modal Logo */}
                <div className="absolute bottom-2 left-2">
                  <LogoSVG
                    className={`w-12 h-12 ${currentTheme.accent} opacity-70 hover:opacity-100 transition-opacity`}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
