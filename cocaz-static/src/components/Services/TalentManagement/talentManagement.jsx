import React from 'react';
import { motion } from 'framer-motion';

const TalentManagement = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Talent Management</h1>
      <p className="mb-4">At COCAZ, we're proud to represent and nurture some of Zimbabwe's most exciting content creators and artists. Our talent management services are designed to help artists reach their full potential and achieve their career goals.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Artists</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Master H</h3>
        <p className="italic mb-2">Genre: Dancehall</p>
        <p>Master H has been making waves in the Zimbabwean dancehall scene with his unique blend of hard-hitting lyrics and infectious rhythms. Under COCAZ management, he has released several chart-topping singles and performed at major festivals across the country.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Jah Signal</h3>
        <p className="italic mb-2">Genre: Dancehall</p>
        <p>Jah Signal has become a household name in Zimbabwe's dancehall community. With COCAZ's support, he has expanded his reach, collaborating with international artists and headlining shows throughout Southern Africa.</p>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Management Approach</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Career Strategy: We work closely with each artist to develop a personalized career plan.</li>
        <li>Brand Development: Our team helps artists craft and maintain a strong, authentic brand image.</li>
        <li>Booking and Tour Management: We handle performance bookings and manage tour logistics.</li>
        <li>Media Relations: We secure press coverage and manage public relations to boost our artists' profiles.</li>
        <li>Digital Presence: We help artists navigate the digital landscape, from social media management to content strategy.</li>
        <li>Legal and Financial Advice: Our network of professionals provides guidance on contracts, royalties, and financial planning.</li>
      </ul>
      
      <p className="mt-8">COCAZ is committed to fostering the growth of Zimbabwe's creative talents. Whether you're an established artist looking for new management or an up-and-coming creator ready to take the next step, we're here to help you achieve your dreams. Contact us to learn more about our talent management services.</p>
    </motion.div>
  );
};

export default TalentManagement;