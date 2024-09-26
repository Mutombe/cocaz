import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const AwardItem = ({ icon: Icon, title, recipient, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 mb-6"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="text-[#FFD500] h-8 w-8 mr-3" />
      <h3 className="text-xl font-semibold text-black">{title}</h3>
    </div>
    <p className="font-semibold mb-2 text-black">{recipient}</p>
    <p className="text-gray-600 ">{description}</p>
  </motion.div>
);

const IndustryAwards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Content Creator of the Year",
      recipient: "Master H",
      description: "Recognized for groundbreaking dancehall music and innovative music videos that captivated audiences across Zimbabwe."
    },
    {
      icon: Star,
      title: "Rising Star Award",
      recipient: "Jah Signal",
      description: "Awarded for rapid growth in the music industry and significant impact on the dancehall genre in Zimbabwe."
    },
    {
      icon: Award,
      title: "Digital Influencer Excellence",
      recipient: "ZimBeauty Ambassadors",
      description: "Collective award for the team of influencers who drove unprecedented engagement for ZimBeauty Co.'s campaigns."
    },
    {
      icon: Trophy,
      title: "Best Marketing Campaign",
      recipient: "COCAZ x Sunsoya Collaboration",
      description: "Honored for the innovative and highly effective influencer marketing campaign that boosted Sunsoya's market presence."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Industry Awards</h1>
      <p className="mb-8">At COCAZ, we take pride in the accomplishments of our managed content creators. Their hard work, creativity, and dedication have been recognized through various industry awards, showcasing the impact of our collaborative efforts in the content creation landscape.</p>
      
      {awards.map((award, index) => (
        <AwardItem key={index} {...award} />
      ))}

      <h2 className="text-2xl font-semibold mt-12 mb-4">Our Commitment to Excellence</h2>
      <p className="mb-4">These awards reflect not only the talent of our creators but also COCAZ's commitment to nurturing and promoting outstanding content. We continue to push boundaries, set new standards, and inspire the next generation of content creators in Zimbabwe.</p>
      
      <p className="mt-6 font-semibold">Join COCAZ today and let us help you achieve award-winning success in your content creation journey!</p>
    </motion.div>
  );
};

export default IndustryAwards;