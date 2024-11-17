import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video as VideoIcon, X, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);


    
    const mediaItems = [
        { type: 'image', src: '../assets/eventprep.jpg', alt: 'COCAZ Event 1', caption: 'Annual Content Creator Awards' },
        { type: 'video', src: '../assets/cocazvid.mp4',thumbnail: '../assets/vid.png', alt: 'COCAZ Event 2', caption: 'Behind the Scenes: Bootcamp' },
        { type: 'image', src: '../assets/camp.jpg', alt: 'COCAZ Event 3', caption: 'Community Networking for Content Creators' },
        { type: 'image', src: '../assets/bootcamp3.jpg', alt: 'COCAZ Event 6', caption: 'Bootcamp for Content Creators' },
        { type: 'image', src: '../assets/logo.jpeg', alt: 'COCAZ Event 6', caption: 'Logo Recreation' },
        { type: 'image', src: '../assets/zam0.jpeg', alt: 'COCAZ Event 6', caption: 'Zim Content Merge with Zambian Creators' },
        { type: 'image', src: '../assets/zam3.jpeg', alt: 'COCAZ Event 6', caption: 'Zim Content Merge with Zambian Creators' },
        { type: 'image', src: '../assets/zam.jpeg', alt: 'COCAZ Event 6', caption: 'Zim Content Merge with Zambian Creators' },
        { type: 'image', src: '../assets/zam1.jpeg', alt: 'COCAZ Event 6', caption: 'Zim Content Merge with Zambian Creators' },
        { type: 'image', src: '../assets/camp2.jpg', alt: 'COCAZ Event 4', caption: 'Community Networking for Content Creators' },
        { type: 'image', src: '../assets/camp3.jpg', alt: 'COCAZ Event 6', caption: 'Community Networking for Content Creators' },
        { type: 'image', src: '../assets/boot-camp.jpg', alt: 'COCAZ Event 6', caption: 'Bootcamp for Content Creators' },
        { type: 'image', src: '../assets/bootcamp2.jpg', alt: 'COCAZ Event 6', caption: 'Bootcamp for Content Creators' },     
        { type: 'image', src: '../assets/bootcamp4.jpg', alt: 'COCAZ Event 6', caption: 'Bootcamp for Content Creators' },
      ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#318000] dark:text-[#5fd75f]">COCAZ Event Gallery</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">Explore the vibrant world of COCAZ through our event gallery. From award ceremonies to behind-the-scenes footage, witness the energy and creativity that define our community.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative cursor-pointer group"
            onClick={() => setSelectedMedia(item)}
          >
            <img 
              src={item.type === 'video' ? item.thumbnail : item.src} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white text-center p-4">{item.caption}</p>
              {item.type === 'video' ? (
                <div className="absolute top-2 right-2 bg-[#318000] rounded-full p-1">
                  <Play className="text-white w-6 h-6" />
                </div>
              ) : (
                <Camera className="absolute top-2 right-2 text-white w-6 h-6" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video src={selectedMedia.src} controls poster={selectedMedia.thumbnail} className="w-full h-auto" />
              ) : (
                <img src={selectedMedia.src} alt={selectedMedia.alt} className="w-full h-auto" />
              )}
              <p className="mt-4 text-center text-gray-800 dark:text-gray-200">{selectedMedia.caption}</p>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setSelectedMedia(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;