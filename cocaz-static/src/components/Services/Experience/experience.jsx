import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const timelineData = [
    { year: 2020, event: 'COCAZ founded', details: 'COCAZ was established with the vision of connecting Zimbabwean content creators with businesses seeking innovative marketing solutions.' },
    { year: 2021, event: 'Expanded to 100+ content creators', details: 'Our network grew significantly, allowing us to offer a diverse range of influencers across various niches.' },
    { year: 2022, event: 'Launched talent management services', details: 'We expanded our offerings to include comprehensive talent management for top-tier content creators.' },
    { year: 2023, event: 'Partnership with CoolSplash', details: 'We initiated our first major partnership with CoolSplash, setting the stage for numerous successful marketing campaigns.' },
    { year: 2024, event: 'Collaboration with Simuka Upenye Intergrated Youth Academy', details: 'A major milestone that showcases our expertise and the trust businesses place in our services.' },
    { year: 2024, event: 'Partnership with Sunsoya', details: 'We partnered with Sunsoya to help the company establish its presence in the digital space.' },
    { year: 2024, event: 'Merging Zambian and Zimbabwean Content Creators', details: 'We merged our network with Zambian and Zimbabwean content creators, providing an Afrocentric Experience to content consumers' },
  ];

  const approachData = [
    { name: 'Tailored Matchmaking', value: 95 },
    { name: 'Campaign Strategy', value: 90 },
    { name: 'Contract Negotiation', value: 85 },
    { name: 'Performance Tracking', value: 92 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#318000] dark:text-[#5fd75f]">Our Experience</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Since our inception in 2020, COCAZ has been at the forefront of connecting talented content creators with businesses seeking innovative marketing solutions. Our experience spans a wide range of industries and campaign types, allowing us to deliver results-driven strategies for our clients.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#318000] dark:text-[#5fd75f]">Company Timeline</h2>
      <div className="relative">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div 
              className="flex items-center cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              onClick={() => setExpandedYear(expandedYear === item.year ? null : item.year)}
            >
              <div className="w-24 text-right pr-4 font-bold">{item.year}</div>
              <div className="w-4 h-4 rounded-full bg-[#318000] dark:bg-[#5fd75f]"></div>
              <div className="flex-1 pl-4">{item.event}</div>
              {expandedYear === item.year ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <AnimatePresence>
              {expandedYear === item.year && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-32 pr-4 py-2 text-gray-700 dark:text-gray-300"
                >
                  {item.details}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-[#318000] dark:bg-[#5fd75f] opacity-20"></div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#318000] dark:text-[#5fd75f]">Notable Partnerships</h2>
      <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Sunsoya</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">We've successfully brokered and managed a series of impactful marketing campaigns between Sunsoya and our network of influencers. These collaborations have significantly boosted Sunsoya's brand visibility and engagement across social media platforms.</p>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center h-32">
          <image src="../assets/sunsoya.jpg" alt="Sunsoya Logo" />
          <p className="font-semibold text-gray-600 dark:text-gray-400">Sunsoya Logo Placeholder</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#318000] dark:text-[#5fd75f]">Our Approach</h2>
      <div className="h-80 w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <ResponsiveContainer>
          <BarChart data={approachData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={150} tick={{ fill: '#318000' }} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: 'none' }} />
            <Bar dataKey="value" fill="#318000" label={{ position: 'right', fill: '#318000' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <motion.p 
        className="mt-8 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Our experience in managing these partnerships has not only driven results for businesses but has also opened up new opportunities for content creators in Zimbabwe. We're proud of the relationships we've built and the success stories we've helped create. If you're a business looking to harness the power of influencer marketing or a content creator seeking exciting brand partnerships, COCAZ is here to help.
      </motion.p>
    </motion.div>
  );
};

export default Experience;