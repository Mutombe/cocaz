import { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Video, Camera, Edit, PenTool, Play } from 'lucide-react';

const MediaProduction = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { icon: Film, name: "Film and TV Production", description: "From concept to screen, we bring stories to life with our full-service film and TV production." },
    { icon: Video, name: "Music Video Production", description: "Create visually stunning music videos that capture the essence of your music." },
    { icon: Camera, name: "Commercial and Corporate Video Production", description: "Engage your audience with high-quality commercial and corporate videos." },
    { icon: Film, name: "Documentary Filmmaking", description: "Tell compelling real-life stories through our expert documentary filmmaking services." },
    { icon: Edit, name: "Post-Production and Editing", description: "Polish your project to perfection with our state-of-the-art post-production and editing services." },
    { icon: PenTool, name: "Animation and Motion Graphics", description: "Bring your ideas to life with captivating animation and motion graphics." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#318000] dark:text-[#5fd75f]">Media Production Services</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">At COCAZ, we're passionate about bringing stories to life through cutting-edge media production. Our team of skilled professionals is dedicated to creating captivating content that resonates with audiences across Zimbabwe and beyond.</p>
      
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#318000] dark:text-[#5fd75f]">Current Project Spotlight: Mandi</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">We're thrilled to announce our current project, "Mandi," a powerful film that draws inspiration from the critically acclaimed "The Woman King." Set in pre-colonial Zimbabwe, "Mandi" tells the story of a fearless female warrior who leads her people against foreign invaders.</p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Much like "The Woman King," our film celebrates the strength, courage, and resilience of African women throughout history. "Mandi" showcases breathtaking battle sequences, intricate cultural details, and compelling performances that bring this important story to life.</p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Our dedicated team is working tirelessly to ensure that "Mandi" not only entertains but also educates and inspires viewers about the rich history and powerful women of Zimbabwe.</p>
        <motion.button
          className="mt-4 bg-[#318000] dark:bg-[#5fd75f] text-white dark:text-gray-900 px-4 py-2 rounded-full flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Trailer
        </motion.button>
      </motion.div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#318000] dark:text-[#5fd75f]">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActiveService(activeService === index ? null : index)}
          >
            <service.icon className="w-8 h-8 text-[#318000] dark:text-[#5fd75f] mb-4" />
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            {activeService === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-700 dark:text-gray-300"
              >
                {service.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        className="mt-8 text-gray-700 dark:text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Whether you're looking to create the next big blockbuster or produce engaging content for your brand, COCAZ has the expertise and creativity to bring your vision to life. Contact us today to learn more about our media production services and how we can help tell your story.
      </motion.p>
    </motion.div>
  );
};

export default MediaProduction;