import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Our Experience</h1>
      <p className="mb-4">Since our inception in 2020, COCAZ has been at the forefront of connecting talented content creators with businesses seeking innovative marketing solutions. Our experience spans a wide range of industries and campaign types, allowing us to deliver results-driven strategies for our clients.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Notable Partnerships</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Sunsoya</h3>
        <p className="mb-2">We've successfully brokered and managed a series of impactful marketing campaigns between Sunsoya and our network of influencers. These collaborations have significantly boosted Sunsoya's brand visibility and engagement across social media platforms.</p>
        <div className="bg-gray-200 p-4 rounded-lg">
          <p className="font-semibold">Sunsoya Logo Placeholder</p>
          <p className="text-sm text-gray-600">For privacy reasons, we can't display the actual logo here. In a real implementation, you would include the Sunsoya logo image.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Tailored Matchmaking: We carefully pair businesses with influencers whose audience and style align with the brand's goals.</li>
        <li>Campaign Strategy: Our team works closely with both parties to develop effective, authentic marketing campaigns.</li>
        <li>Contract Negotiation: We ensure fair and transparent agreements that benefit both the brand and the content creator.</li>
        <li>Performance Tracking: We use advanced analytics to measure campaign success and provide detailed reports.</li>
      </ul>
      
      <p className="mt-8">Our experience in managing these partnerships has not only driven results for businesses but has also opened up new opportunities for content creators in Zimbabwe. We're proud of the relationships we've built and the success stories we've helped create. If you're a business looking to harness the power of influencer marketing or a content creator seeking exciting brand partnerships, COCAZ is here to help.</p>
    </motion.div>
  );
};

export default Experience;