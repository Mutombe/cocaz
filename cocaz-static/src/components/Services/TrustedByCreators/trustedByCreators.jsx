import { motion } from 'framer-motion';
import { UserCheck, ThumbsUp, TrendingUp } from 'lucide-react';

const CreatorTestimonial = ({ name, category, testimonial, avatar }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 mb-6"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex items-center mb-4">
      <img src={avatar} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold mb-1 text-black">{name}</h3>
        <p className="text-gray-600">{category}</p>
      </div>
    </div>
    <p className="italic text-black">"{testimonial}"</p>
  </motion.div>
);

const TrustedByCreators = () => {
  const testimonials = [
    {
      name: "Frets Donzvo",
      category: "Comedian/Artist",
      testimonial: "COCAZ has been instrumental in elevating my career. Their guidance and support have opened doors I never thought possible.",
      avatar: "../assets/frets.jpg"
    },
    {
      name: "Rutendo",
      category: "Actress",
      testimonial: "COCAZ's network and resources have helped me turn my passion into a thriving career. I'm grateful for their continuous support.",
      avatar: "../assets/rue.jpg"
    },
    {
      name: "Jah Signal",
      category: "Musician",
      testimonial: "Since joining COCAZ, my fan base has grown exponentially. Their strategies for audience engagement are unparalleled.",
      avatar: "../assets/jahsignal.jpg"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Trusted by Creators</h1>
      <p className="mb-8">At COCAZ, we're more than just a management company - we're a family of creators. Our commitment to nurturing talent and fostering growth has made us the trusted partner for content creators across Zimbabwe.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <UserCheck className="text-[#318000] h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
          <p>We provide mentorship and resources to help our creators reach their full potential.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ThumbsUp className="text-[#318000] h-12 w-12 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Industry Connections</h3>
          <p>Our network opens doors to collaborations and opportunities across the industry.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TrendingUp className="text-[#318000] h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Career Advancement</h3>
          <p>We work tirelessly to propel our creators' careers to new heights.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Hear From Our Creators</h2>
      {testimonials.map((testimonial, index) => (
        <CreatorTestimonial key={index} {...testimonial} />
      ))}

      <p className="mt-8 font-semibold">Join the COCAZ family and experience the difference of working with a team that truly cares about your success!</p>
    </motion.div>
  );
};

export default TrustedByCreators;
