import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const SatisfiedClients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedClient, setExpandedClient] = useState(null);

  const clientSuccesses = [
    {
      name: 'Sunsoya',
      logo: '🌞', // Replace with actual logo URL when available
      achievements: [
        'Increase brand awareness by 150% among their target demographic',
        'Boost engagement rates on social media by 200%',
        'Drive a 75% increase in online sales during campaign periods'
      ],
      quote: "COCAZ has been instrumental in helping us connect with our audience in an authentic and impactful way. Their understanding of the local market and their network of talented creators have been invaluable to our marketing efforts.",
      author: "Marketing Director, Sunsoya"
    },
    {
      name: 'Master H',
      logo: '🎵', // Replace with actual logo URL when available
      achievements: [
        'Increased social media following by 300% in 6 months',
        'Secured 5 major brand endorsement deals',
        'Produced and promoted a chart-topping album',
        'Organized a successful nationwide tour'
      ],
      quote: "COCAZ took my career to the next level. Their guidance and connections in the industry have been priceless. I couldn't have achieved this much success without their support.",
      author: "Master H"
    },
    {
      name: 'Jah Signal',
      logo: '🎤', // Replace with actual logo URL when available
      achievements: [
        'Doubled monthly listeners on streaming platforms',
        'Successful launch of a clothing line inspired by his music',
        'Coordinated international collaborations with top artists',
        'Increased revenue from live performances by 150%'
      ],
      quote: "COCAZ's expertise in talent management has been crucial to my success. They've helped me diversify my brand and reach new audiences I never thought possible.",
      author: "Jah Signal"
    },
    {
      name: 'ZimBeauty Co.',
      logo: '💄', // Replace with actual logo URL when available
      achievements: [
        '30% increase in sales of their flagship skincare line',
        'Successfully launched in two new African markets',
        'Created viral content reaching over 1 million views',
        'Established partnerships with 50+ micro-influencers'
      ],
      quote: "The COCAZ team's approach to influencer marketing is unparalleled. They understood our brand vision and connected us with creators who genuinely resonated with our products. The results speak for themselves.",
      author: "CEO, ZimBeauty Co."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % clientSuccesses.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + clientSuccesses.length) % clientSuccesses.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#318000] dark:text-[#5fd75f]">Our Satisfied Clients</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">At COCAZ, our success is measured by the success and satisfaction of our clients. We're proud to have worked with a diverse range of businesses and content creators, helping them achieve their goals and grow their brands.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#318000] dark:text-[#5fd75f]">Client Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clientSuccesses.map((client, index) => (
          <motion.div
            key={client.name}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setExpandedClient(expandedClient === index ? null : index)}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{client.logo}</div>
                <h3 className="text-xl font-semibold">{client.name}</h3>
              </div>
              <AnimatePresence>
                {expandedClient === index && (
                  <motion.ul
                    className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {client.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <div className="flex items-center text-[#318000] dark:text-[#5fd75f]">
                <span className="mr-2">{expandedClient === index ? 'Hide details' : 'View details'}</span>
                <ArrowRight size={16} className={`transform transition-transform ${expandedClient === index ? 'rotate-90' : ''}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#318000] dark:text-[#5fd75f]">Client Testimonials</h2>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <button onClick={prevTestimonial} className="text-[#318000] dark:text-[#5fd75f] hover:opacity-75 transition-opacity">
              <ChevronLeft size={24} />
            </button>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <button onClick={nextTestimonial} className="text-[#318000] dark:text-[#5fd75f] hover:opacity-75 transition-opacity">
              <ChevronRight size={24} />
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{clientSuccesses[currentTestimonial].quote}"</p>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">- {clientSuccesses[currentTestimonial].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#318000] dark:text-[#5fd75f]">Our Commitment to Client Success</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Tailored strategies to meet specific business goals</li>
        <li>Access to our extensive network of talented content creators</li>
        <li>Ongoing support and campaign optimization</li>
        <li>Regular performance reports and analytics</li>
        <li>Workshops and training to keep our clients at the forefront of content creation trends</li>
      </ul>

      <motion.div
        className="mt-8 bg-[#318000] dark:bg-[#5fd75f] text-white dark:text-gray-900 rounded-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Join Our Success Stories?</h2>
        <p className="mb-4">Experience the COCAZ difference and take your brand or career to new heights. Contact us today to start your journey towards content creation success!</p>
        <button className="bg-white text-[#318000] dark:bg-gray-900 dark:text-[#5fd75f] font-bold py-2 px-4 rounded hover:bg-opacity-90 dark:hover:bg-opacity-90 transition duration-300">
          Get Started Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SatisfiedClients;