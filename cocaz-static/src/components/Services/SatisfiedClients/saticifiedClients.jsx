import React from 'react';
import { motion } from 'framer-motion';

const SatisfiedClients = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Our Satisfied Clients</h1>
      <p className="mb-4">At COCAZ, our success is measured by the success and satisfaction of our clients. We're proud to have worked with a diverse range of businesses and content creators, helping them achieve their goals and grow their brands.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Client Success Stories</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Sunsoya</h3>
        <p className="mb-2">Our partnership with Sunsoya has been a shining example of successful influencer marketing. Through carefully curated collaborations with our network of content creators, we helped Sunsoya:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Increase brand awareness by 150% among their target demographic</li>
          <li>Boost engagement rates on social media by 200%</li>
          <li>Drive a 75% increase in online sales during campaign periods</li>
        </ul>
        <p className="italic">"COCAZ has been instrumental in helping us connect with our audience in an authentic and impactful way. Their understanding of the local market and their network of talented creators have been invaluable to our marketing efforts." - Marketing Director, Sunsoya</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Content Creator: Master H</h3>
        <p className="mb-2">As part of our talent management services, we've helped dancehall artist Master H achieve significant career milestones:</p>
        <ul className="list-disc list-inside mb-4">
          <li></li>