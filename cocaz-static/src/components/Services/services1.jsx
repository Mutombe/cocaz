import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Video, 
  Monitor, 
  Camera, 
  Eye, 
  TrendingUp, 
  BarChart2, 
  Users, 
  Network, 
  Zap, 
  MoreHorizontal,
  Share2,
  FileText,
  Instagram,
  Youtube,
  Twitter,
  Tv
} from 'lucide-react';

// Animated section header component
const SectionHeader = ({ title, subtitle, align = "center" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  return (
    <div 
      ref={ref}
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
      >
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

// Service card component with hover effects
const ServiceCard = ({ icon: Icon, title, description, link, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Animated icon with border */}
      <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <Icon size={28} />
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Link 
        to={link} 
        className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
      >
        Learn more
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

// Interactive service category showcase
const ServiceShowcase = ({ title, description, features, image, reversed = false, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center py-12 sm:py-20`}
    >
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4 inline-block">
          Service {index + 1}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                <Zap className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <p className="text-gray-700">{feature}</p>
            </motion.div>
          ))}
        </div>
        
        <Link 
          to={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`} 
          className="mt-8 inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors group"
        >
          Discover more
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-700 shadow-lg">
            Premium Service
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Animated statistics component
const StatCounter = ({ value, label, icon: Icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      let startValue = 0;
      const duration = 2000; // ms
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      const increment = numericValue / totalFrames;

      const counter = setInterval(() => {
        startValue += increment;

        if (startValue > numericValue) {
          setCount(numericValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(startValue));
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl font-bold text-gray-900">
        {count}
        <span className="text-purple-600">+</span>
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

// Testimonial component
const ServiceTestimonial = ({ name, company, text, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-lg relative border border-gray-100"
    >
      <div className="mb-6">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-300">
          <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 13.2 5.26667 11 7.13333 9.13334C9 7.26667 11.2667 6.33334 13.9333 6.33334L14.6667 8.66667C13.0667 8.73334 11.6667 9.33334 10.4667 10.4667C9.26667 11.6 8.66667 12.8667 8.66667 14.2667C8.8 14.2 9.06667 14.1667 9.46667 14.1667C10.6 14.1667 11.5333 14.5333 12.2667 15.2667C13 16 13.3667 16.9333 13.3667 18.0667C13.3667 19.2 13 20.1333 12.2667 20.8667C11.5333 21.1778 10.5333 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 13.2 17.2667 11 19.1333 9.13334C21 7.26667 23.2667 6.33334 25.9333 6.33334L26.6667 8.66667C25.0667 8.73334 23.6667 9.33334 22.4667 10.4667C21.2667 11.6 20.6667 12.8667 20.6667 14.2667C20.8 14.2 21.0667 14.1667 21.4667 14.1667C22.6 14.1667 23.5333 14.5333 24.2667 15.2667C25 16 25.3667 16.9333 25.3667 18.0667C25.3667 19.2 25 20.1333 24.2667 20.8667C23.5333 21.1778 22.5333 21.3333 21.3333 21.3333Z" fill="currentColor"/>
        </svg>
      </div>

      <p className="text-gray-700 italic mb-8">{text}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 opacity-50 rounded-bl-full -mr-4 -mt-4 z-0 pointer-events-none"></div>
    </motion.div>
  );
};

// Main Services Page Component
const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Content Creation",
      description: "We help brands and creators develop high-quality, engaging content that resonates with Zimbabwean audiences across all digital platforms.",
      features: [
        "Professional video production for social media and commercials",
        "Photography sessions with industry-leading equipment",
        "Copywriting and scriptwriting for all digital platforms",
        "Podcast production and distribution services"
      ],
      image: "/content.jpg"
    },
    {
      title: "Marketing",
      description: "Strategic marketing services designed to amplify your brand's message and connect with your target audience through influential voices.",
      features: [
        "Influencer campaign strategy and management",
        "Social media marketing and content calendars",
        "Performance tracking and analytics reporting",
        "Brand positioning and audience targeting"
      ],
      image: "/marketing.jpg",
      reversed: true
    },
    {
      title: "Networking",
      description: "Connect with Zimbabwe's most influential creators and brands through exclusive events, workshops, and collaborative opportunities.",
      features: [
        "Industry networking events and masterclasses",
        "Brand-creator matchmaking for perfect partnerships",
        "Community building and professional development",
        "Exclusive access to creator resources and tools"
      ],
      image: "/networking2.jpeg"
    }
  ];

  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Abstract grid pattern */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0,0 L40,0 L40,40 L0,40 Z" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 mt-12 lg:mt-0"
            >
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Amplify Your Digital Presence
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Premium Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-xl">
                Elevate your brand with Zimbabwe's leading content creation, marketing, and networking services tailored for the digital age.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-50 transition-colors group inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Main image */}
                <div className="bg-purple-300/10 backdrop-blur-sm p-1 rounded-2xl shadow-2xl">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/assets/camp.jpg" 
                      alt="COCAZ Services" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <motion.div 
                  initial={{ x: -10, y: -10 }}
                  animate={{ x: 10, y: 10 }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 5 
                  }}
                  className="absolute -top-6 -left-6 w-16 h-16 bg-purple-400/30 backdrop-blur-sm rounded-lg"
                />
                <motion.div 
                  initial={{ x: 10, y: 10 }}
                  animate={{ x: -10, y: -10 }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 7
                  }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 backdrop-blur-sm rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Services Overview */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Services" 
            subtitle="Comprehensive solutions to help content creators and brands thrive in Zimbabwe's digital landscape"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard 
              icon={Camera}
              title="Content Creation"
              description="Professional content production for all digital platforms, from video and photography to graphic design and copywriting."
              link="/services/content-creation"
              index={0}
            />
            <ServiceCard 
              icon={TrendingUp}
              title="Marketing"
              description="Amplify your message through strategic marketing campaigns, influencer partnerships, and audience targeting."
              link="/services/marketing"
              index={1}
            />
            <ServiceCard 
              icon={Network}
              title="Networking"
              description="Connect with Zimbabwe's top creators and brands through exclusive events, workshops, and collaborative opportunities."
              link="/services/networking"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Detailed Service Categories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="How We Help You Succeed" 
            subtitle="From concept to execution, we provide end-to-end services tailored to your unique goals"
          />
          
          <div className="space-y-12 sm:space-y-20">
            {serviceCategories.map((category, index) => (
              <ServiceShowcase 
                key={category.title}
                title={category.title}
                description={category.description}
                features={category.features}
                image={category.image}
                reversed={category.reversed}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record of <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600">Our services have helped hundreds of creators and brands achieve remarkable growth</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter
              value="500"
              label="Content Projects"
              icon={FileText}
              index={0}
            />
            <StatCounter
              value="100"
              label="Brand Partnerships"
              icon={Share2}
              index={1}
            />
            <StatCounter
              value="50"
              label="Networking Events"
              icon={Users}
              index={2}
            />
            <StatCounter
              value="1000"
              label="Platform Growth"
              icon={TrendingUp}
              index={3}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Client Success Stories" 
            subtitle="Hear from creators and brands who have transformed their digital presence with our services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceTestimonial
              name="Kimnanah"
              company="Fashion Influencer"
              text="The content creation team at COCAZ has completely transformed my visual branding. My engagement rates have increased by 300% since partnering with them."
              image="/Kiman.jpeg"
              index={0}
            />
            <ServiceTestimonial
              name="Matsanga"
              company="Tech Creator"
              text="Their marketing strategy helped me reach audiences I never thought possible. The team understands the Zimbabwean digital landscape better than anyone."
              image="/assets/matsanga.jpg"
              index={1}
            />
            <ServiceTestimonial
              name="Delta Beverages"
              company="Corporate Partner"
              text="The networking events organized by COCAZ connected us with the perfect content creators for our campaigns. The ROI has been exceptional."
              image="/assets/brands/delta.png"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative px-6 py-12 sm:px-12 sm:py-16 rounded-3xl overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                <defs>
                  <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="white" fillOpacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Ready to Elevate Your Digital Presence?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-8"
              >
                Let's discuss how our services can help you achieve your content and marketing goals
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 hover:shadow-lg transition-all shadow-xl inline-flex items-center justify-center"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  View Our Portfolio
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Platform Icons */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-lg text-gray-600">Our services cover all major platforms</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Instagram className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Instagram</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Youtube className="w-8h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">YouTube</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Twitter className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Twitter</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Tv className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Television</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Monitor className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Web Platforms</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <MoreHorizontal className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">And More</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Get answers to common questions about our services and process"
          />
          
          {/* FAQ items would go here */}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;