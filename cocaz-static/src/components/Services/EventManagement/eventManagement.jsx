import React from 'react';
import { motion } from 'framer-motion';

const EventManagement = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Event Management Services</h1>
      <p className="mb-4">COCAZ offers top-tier event management services, leveraging our network of talented content creators to make your special occasions truly unforgettable.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Master of Ceremonies (MC) Services</h2>
      <p className="mb-4">Our roster includes some of Zimbabwe's most skilled and charismatic MCs. These content creators have honed their craft through years of engaging with audiences both online and in person. They bring energy, wit, and professionalism to every event they host.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Events We Specialize In</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Weddings: Our MCs ensure your special day flows smoothly, keeping guests entertained and the atmosphere joyful.</li>
        <li>Corporate Events: From product launches to annual galas, we help maintain a professional yet engaging atmosphere.</li>
        <li>Get-togethers and Parties: Whether it's a birthday, anniversary, or just a friendly gathering, our MCs know how to keep the energy high and the fun flowing.</li>
        <li>Conferences and Seminars: We help maintain audience engagement throughout long days of presentations and networking.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Full-Service Event Planning</h2>
      <p className="mb-4">Beyond providing MCs, COCAZ offers comprehensive event planning services. We can help with:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Venue selection and decoration</li>
        <li>Entertainment booking</li>
        <li>Catering coordination</li>
        <li>Audio-visual setup</li>
        <li>Guest list management</li>
        <li>On-site event coordination</li>
      </ul>
      
      <p className="mt-8">Let COCAZ take the stress out of your event planning. With our network of talented content creators and our experience in managing events of all sizes, we'll ensure your gathering is a resounding success. Contact us today to start planning your next unforgettable event!</p>
    </motion.div>
  );
};

export default EventManagement;