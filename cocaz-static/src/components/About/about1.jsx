import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Users, Target, Award, Sparkles, Play, Camera, Rss } from 'lucide-react';
import { ArrowRight, Star, Shield, ChevronDown, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import necessary for parallax and animations
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const AboutPage = () => {
  // Refs for scroll animations
  const missionRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  
  // Check if elements are in view
  const missionInView = useInView(missionRef, { once: true, threshold: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.5 });
  const teamInView = useInView(teamRef, { once: true, threshold: 0.2 });
  
  // Rich timeline data with images and icons
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'CCAZ was established to support Zimbabwe\'s growing creator economy',
      icon: <Target className="w-6 h-6" />,
      image: '/assets/logo4.jpeg',
      achievement: '50+ founding members'
    },
    {
      year: '2021',
      title: 'Growth',
      description: 'Expanded to 100+ creators and launched educational programs',
      icon: <Users className="w-6 h-6" />,
      image: '/assets/logo4.jpeg',
      achievement: '5 nationwide workshops'
    },
    {
      year: '2022',
      title: 'Partnerships',
      description: 'Formed strategic partnerships with major brands and platforms',
      icon: <Shield className="w-6 h-6" />,
      image: '/assets/logo4.jpeg',
      achievement: '12 brand collaborations'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Launched creator support platform and mentorship program',
      icon: <Sparkles className="w-6 h-6" />,
      image: '/assets/logo4.jpeg',
      achievement: '200+ mentored creators'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Expanded our reach across Southern Africa with virtual events',
      icon: <Rss className="w-6 h-6" />,
      image: '/assets/logo4.jpeg',
      achievement: 'Regional impact award'
    }
  ];

  // Enhanced team data with social profiles and backgrounds
  const team = [
  {
    name: 'Takunda Tapfuma',
    role: 'Co-Founder & Talent Manager',
    image: '/taku.jpeg',
    bio: 'Visionary digital strategist and talent manager with over 10 years transforming creators into industry leaders. Former YouTube strategist who has scaled channels to millions of subscribers and managed multi-million dollar creator partnerships across diverse verticals.',
    socials: {
      twitter: 'tendaimoyo',
      instagram: 'tendaimoyo',
    },
    specialty: 'Strategic Planning & Talent Development',
    achievements: [
      'Scaled 50+ creator channels to 6-figure revenues',
      'Managed $5M+ in brand partnerships',
      'Developed proprietary growth frameworks used industry-wide'
    ]
  },
    {
      name: 'Wellington Bakaimani',
      role: 'Head of Partnerships',
      image: '/welly.jpeg',
      bio: 'Media executive who pioneered creator-brand relationships in Zimbabwe',
      socials: {
        twitter: 'chipodziva',
        instagram: 'chipodziva',
      },
      specialty: 'Brand Collaboration'
    },
    {
      name: 'Victor Tinashe Mpofu',
      role: 'Chairman',
      image: '/vikela.jpeg',
      bio: 'Award-winning filmmaker and digital storytelling expert',
      socials: {
        twitter: 'tatendamukuto',
        instagram: 'tatendamukuto',
      },
      specialty: 'Visual Storytelling'
    },
    {
      name: 'Bridget Paradza',
      role: 'Vice Chairperson',
      image: '/bri.jpg',
      bio: 'Tech innovator passionate about digital platforms for African creators',
      socials: {
        twitter: 'faraiz',
        instagram: 'faraizinhumwe',
      },
      specialty: 'Digital Infrastructure'
    }
  ];

  // Impact stats
  const stats = [
    { label: 'Active Members', value: '500+', icon: <Users className="w-6 h-6" /> },
    { label: 'Workshops Held', value: '120+', icon: <Camera className="w-6 h-6" /> },
    { label: 'Brand Partnerships', value: '50+', icon: <Shield className="w-6 h-6" /> },
    { label: 'Creator Revenue', value: '$2M+', icon: <Award className="w-6 h-6" /> }
  ];

  // Content categories
  const categories = [
    { name: 'Video', icon: <Play className="w-8 h-8" /> },
    { name: 'Photography', icon: <Camera className="w-8 h-8" /> },
    { name: 'Podcasting', icon: <Rss className="w-8 h-8" /> },
    { name: 'Social Media', icon: <Instagram className="w-8 h-8" /> }
  ];

  // Scroll behavior for parallax effects
  const { scrollYProgress } = useScroll();
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Custom Cursor - Adds a modern touch */}
      <div id="custom-cursor" className="fixed w-8 h-8 rounded-full bg-purple-500 opacity-50 pointer-events-none z-50 mix-blend-difference hidden lg:block" style={{ transform: 'translate(-50%, -50%)' }}></div>

      {/* Hero Section - Dynamic with video background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - This increases visual appeal */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20 z-5"></div>
          <img 
            src="/shamva2.jpg" 
            alt="Creative content creators"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Animated hero content */}
        <motion.div
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tighter"
          >
            <span className="inline-block">Content Creators</span><br />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
              Association of Zimbabwe
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8"
          >
            Empowering Zimbabwe's creative voices and building the future of digital content since 2020
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/join"
              className="group relative inline-flex items-center px-8 py-4 bg-white text-purple-900 rounded-full font-semibold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Join Our Community</span>
              <ArrowRight className="ml-2 w-5 h-5 relative" />
            </Link>
            
            <Link
              to="/showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              View Creator Showcase
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Content Creator Categories */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              For Creators, By Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Supporting all forms of digital content creation across Zimbabwe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-2xl text-center hover:from-purple-700 hover:to-purple-500 transition-all duration-300 shadow-glow"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - With 3D card effect */}
      <section ref={missionRef} className="py-20 bg-gradient-to-br from-purple-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating elements for visual interest */}
        <div className="hidden md:block">
          <motion.div 
            className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"
            animate={{ y: [-20, 20, -20], rotate: [0, 45, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-yellow-500/20 blur-xl"
            animate={{ y: [20, -20, 20], rotate: [45, 0, 45] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Purpose</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Building a sustainable ecosystem for Zimbabwe's digital creators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20, rotateY: 10 }}
              animate={missionInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10 transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="transform" style={{ transform: 'translateZ(20px)' }}>
                <Target className="w-12 h-12 text-yellow-400 mb-6" />
                <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-gray-300">
                  To nurture and empower Zimbabwe's content creators through education,
                  resources, and meaningful connections with brands and audiences. We believe
                  in creating pathways to sustainable careers in digital media.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, rotateY: -10 }}
              animate={missionInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10 transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="transform" style={{ transform: 'translateZ(20px)' }}>
                <Sparkles className="w-12 h-12 text-yellow-400 mb-6" />
                <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                <p className="text-gray-300">
                  To be the driving force behind Africa's most innovative and 
                  influential content creator community, showcasing Zimbabwe's creative talent
                  to the world and defining the future of digital media in Africa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats - With animated counters */}
      <section ref={statsRef} className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating real change in Zimbabwe's digital landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-purple-900/30 border border-purple-500/20 p-6 rounded-2xl text-center hover:bg-purple-800/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Rich media horizontal scroll */}
      <section ref={timelineRef} className="py-20 bg-gradient-to-br from-black to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Building Zimbabwe's creator economy, one milestone at a time
            </p>
          </motion.div>

          {/* Desktop Timeline - Horizontal Scroll */}
          <div className="hidden md:block relative pb-10">
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 top-1/2 -translate-y-1/2"></div>
            
            <div className="flex space-x-8 overflow-x-auto pb-8 snap-x scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-300/10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-80 snap-center"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                    
                    <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                      <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-lg font-bold text-yellow-400">{item.year}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="inline-block px-4 py-2 bg-purple-900/50 rounded-full text-sm text-white">
                          {item.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-yellow-500"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative ml-12"
                >
                  <div className="absolute left-0 top-0 -translate-x-8 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 flex items-center justify-center z-10">
                    {item.icon}
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <span className="text-md font-bold text-yellow-400">{item.year}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <div className="inline-block px-3 py-1 bg-purple-900/50 rounded-full text-xs text-white">
                        {item.achievement}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Creative cards with hover effects */}
      <section ref={teamRef} className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the people driving our mission forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/20 rounded-2xl overflow-hidden"
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/80 to-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Image with clipping path */}
                <div className="relative z-10 h-64 overflow-hidden">
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform-gpu"
                  />
                </div>
                
                {/* Content that moves up on hover */}
                <div className="p-6 relative z-10 text-white transform transition-transform duration-500 group-hover:-translate-y-16">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-black transition-colors duration-300">{member.name}</h3>
                  <p className="text-gray-300 mb-2 group-hover:text-black/70 transition-colors duration-300">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-black/90">{member.bio}</p>
                  
                  {/* Specialty badge */}
                  <div className="inline-block px-3 py-1 bg-purple-700/50 rounded-full text-xs mb-4 group-hover:bg-black/20 transition-colors duration-300">
                    {member.specialty}
                  </div>
                  
                  {/* Social icons that appear on hover */}
                  <div className="flex space-x-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.socials.twitter && (
                      <a href={`https://twitter.com/${member.socials.twitter}`} className="text-black hover:text-white transition-colors duration-300">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={`https://instagram.com/${member.socials.instagram}`} className="text-black hover:text-white transition-colors duration-300">
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call To Action */}
    

      {/* Custom cursor animation - Adds modern interactivity */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('mousemove', (e) => {
            const cursor = document.getElementById('custom-cursor');
            if (cursor) {
              cursor.style.left = e.clientX + 'px';
              cursor.style.top = e.clientY + 'px';
            }
          });
          
          // Highlight effect on interactive elements
          const interactives = document.querySelectorAll('a, button');
          interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
              const cursor = document.getElementById('custom-cursor');
              if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            });
            el.addEventListener('mouseleave', () => {
              const cursor = document.getElementById('custom-cursor');
              if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
          });
        `
      }} />
    </div>
  );
};

export default AboutPage;