import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Music, Video, Camera, Globe, Mic, Palette, 
  Instagram, Youtube, ShoppingBag, PlayCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Shield, Award, TrendingUp } from 'lucide-react';


const CreatorCategoriesSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'Musicians',
      icon: Music,
      count: '150+',
      color: 'from-purple-500 to-blue-500',
      description: 'Recording artists, producers, and songwriters shaping Zimbabwe`s music scene',
      background: 'bg-purple-100'
    },
    {
      id: 2,
      title: 'Video Creators',
      icon: Video,
      count: '200+',
      color: 'from-red-500 to-orange-500',
      description: 'Filmmakers, vloggers, and storytellers creating compelling visual content',
      background: 'bg-red-100'
    },
    {
      id: 3,
      title: 'Photographers',
      icon: Camera,
      count: '120+',
      color: 'from-blue-500 to-teal-500',
      description: 'Visual artists capturing Zimbabwe`s beauty through their lenses',
      background: 'bg-blue-100'
    },
    {
      id: 4,
      title: 'Digital Influencers',
      icon: Globe,
      count: '300+',
      color: 'from-green-500 to-teal-500',
      description: 'Social media personalities with engaged followings',
      background: 'bg-green-100'
    },
    {
      id: 5,
      title: 'Podcasters',
      icon: Mic,
      count: '80+',
      color: 'from-yellow-500 to-orange-500',
      description: 'Voice artists and storytellers sharing compelling narratives',
      background: 'bg-yellow-100'
    },
    {
      id: 6,
      title: 'Artists',
      icon: Palette,
      count: '100+',
      color: 'from-pink-500 to-rose-500',
      description: 'Digital artists, illustrators, and visual content creators',
      background: 'bg-pink-100'
    }
  ];

  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Creator Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a diverse community of talented creators making waves in Zimbabwe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className={`relative overflow-hidden rounded-2xl ${category.background} p-6 transform transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="relative z-10">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-white/30 px-3 py-1 rounded-full">
                    {category.count} Creators
                  </span>
                  <Link
                    to={`/creators/${category.title.toLowerCase()}`}
                    className="text-sm font-semibold text-gray-900 hover:text-gray-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCategory === category.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BrandPartnersSection = () => {
  // Simulate brand logos with colored rectangles
  const brandLogos = [
    { id: 1, color: 'bg-blue-200', name: 'Brand 1' },
    { id: 2, color: 'bg-purple-200', name: 'Brand 2' },
    { id: 3, color: 'bg-green-200', name: 'Brand 3' },
    { id: 4, color: 'bg-yellow-200', name: 'Brand 4' },
    { id: 5, color: 'bg-red-200', name: 'Brand 5' },
    { id: 6, color: 'bg-indigo-200', name: 'Brand 6' },
  ];

  const stats = [
    {
      id: 1,
      icon: Shield,
      value: '100+',
      label: 'Trusted Brands',
      description: 'Partner with Zimbabwe`s leading companies'
    },
    {
      id: 2,
      icon: Award,
      value: '500+',
      label: 'Successful Campaigns',
      description: 'Delivered engaging marketing campaigns'
    },
    {
      id: 3,
      icon: TrendingUp,
      value: '5M+',
      label: 'Monthly Reach',
      description: 'Connect with engaged audiences'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with Zimbabwe's most influential content creators
          </p>
        </motion.div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className={`w-full aspect-video ${brand.color} rounded-lg shadow-lg flex items-center justify-center`}>
                <span className="text-gray-600 font-semibold">{brand.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/brands/partner"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorCategoriesSection;