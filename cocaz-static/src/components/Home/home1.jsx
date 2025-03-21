import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  Building,
  TrendingUp,
  Network,
  Shield,
  Palette,
  Globe,
  MessageSquare,
  Target,
  ChevronDown,
  Star,
  Instagram,
  Twitter,
  Youtube,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

// Dynamic particle background component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasDimensions);
    setCanvasDimensions();

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(${Math.floor(
          Math.random() * 100 + 100
        )}, ${Math.floor(Math.random() * 100)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.05;

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.min(
        100,
        (canvas.width * canvas.height) / 15000
      ); // Reduced number of particles for mobile
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Create connections between particles
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 100, 255, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

// Fixed video background component with overlay
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 z-10"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/cocazvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const BrandLogo = ({ name, logo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center bg-white/10 backdrop-blur-md p-2 rounded-lg h-12"
    >
      <img src={logo} alt={name} className="h-6 max-w-full" />
    </motion.div>
  );
};

// Platform logo component for the hero section
const PlatformLogo = ({ name, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full h-12 w-12 overflow-hidden"
    >
      <div className="h-6 w-6 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={`${name} logo`} 
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </motion.div>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-white/90"
    >
      <Icon className="w-10 h-10 text-purple-600 mb-4" />
      <h3 className="text-3xl font-bold text-gray-900">
        {count}
        <span className="text-purple-600">+</span>
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

// Featured creator card
const CreatorCard = ({ creator, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[3/4] shadow-lg group-hover:shadow-xl transition-all duration-300">
        <img
          src={creator.image}
          alt={creator.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h3 className="text-xl font-bold">{creator.name}</h3>
          <p className="text-sm text-purple-200">{creator.category}</p>

          <div className="mt-2 flex space-x-2">
            {creator.platforms.map((platform, i) => {
              const Icon =
                platform === "instagram"
                  ? Instagram
                  : platform === "twitter"
                  ? Twitter
                  : Youtube;

              return (
                <span key={i} className="text-white/70">
                  <Icon size={16} />
                </span>
              );
            })}
          </div>
        </div>

        <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold py-1 px-2 rounded-full flex items-center">
          <Star size={12} className="mr-1" />
          {creator.followers}
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial component
const Testimonial = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-lg relative"
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="mt-6">
        <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                }
                fill={i < testimonial.rating ? "#EAB308" : "none"}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main HomePage component
const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const brandPartners = [
    { name: "Econet", logo: "/.png" },
    { name: "Cassava", logo: "/assets/brands/cassava.png" },
    { name: "Delta", logo: "/assets/brands/delta.png" },
    { name: "NetOne", logo: "/assets/brands/netone.png" },
    { name: "OK Zimbabwe", logo: "/assets/brands/okzim.png" },
    { name: "CBZ Bank", logo: "/assets/brands/cbz.png" },
  ];

  // Sample platform icons
  const platforms = [
    { 
      name: "Instagram", 
      imageUrl: "/in.png" 
    },
    { 
      name: "Facebook", 
      imageUrl: "/fb.png" 
    },
    { 
      name: "YouTube", 
      imageUrl: "/yt.png" 
    },
    { 
      name: "TikTok", 
      imageUrl: "/tk.png"
    },
  ];
  const featuredCreators = [
    {
      name: "Kimnanah",
      category: "Fashion & Lifestyle",
      image: "/Kiman.jpeg",
      platforms: ["instagram", "youtube"],
      followers: "320K",
    },
    {
      name: "Matsanga",
      category: "Tech & Gaming",
      image: "/assets/matsanga.jpg",
      platforms: ["youtube", "twitter"],
      followers: "450K",
    },
    {
      name: "Kuda Rashman",
      category: "Travel & Adventure",
      image: "/assets/rashman.jpg",
      platforms: ["instagram", "twitter", "youtube"],
      followers: "180K",
    },
    {
      name: "Loraine Guyo",
      category: "Business & Finance",
      image: "/assets/loraine.jpg",
      platforms: ["youtube", "twitter"],
      followers: "275K",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: "Kimnanah",
      position: "Fashion Influencer",
      text: "Joining COCAZ transformed my career as a content creator. Within 6 months, I landed partnerships with major fashion brands in Zimbabwe and beyond.",
      avatar: "/Kiman.jpeg",
      rating: 5,
    },
    {
      name: "Matsanga",
      position: "Travel Vlogger",
      text: "The network and resources provided by COCAZ helped me grow my audience by 300%. Their team understands the local and international digital landscape.",
      avatar: "/assets/matsanga.jpg",
      rating: 5,
    },
    {
      name: "Kuda Rashman",
      position: "Marketing Director at XYZ Brand",
      text: "Working with COCAZ creators has consistently delivered exceptional ROI for our campaigns. Their professionalism and audience engagement is unmatched.",
      avatar: "/assets/rashman.jpg",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
        <ParticleBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              {/* Improved visibility for the Zimbabwe's Premier Creator Network tag */}
              <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 shadow-lg">
                Zimbabwe's Premier Creator Network
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              <span className="block drop-shadow-lg">
                Empowering Zimbabwe's
              </span>
              <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                Creative Visionaries
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-10"
            >
              <p className="text-white/80 text-sm mb-3">FIND US ON</p>
              <div className="flex items-center justify-center space-x-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                  >
                    <PlatformLogo 
              name={platform.name} 
              imageUrl={platform.imageUrl} 
            />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-purple-500/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                Join as Creator
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Improved Watch Demo button visibility */}
              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-4 bg-white/20 border-2 border-white backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-10 left-0 right-0 text-center pointer-events-none sm:pointer-events-auto"
            ></motion.div>

            <br></br>
            <button className="text-white hover:text-white transition-colors duration-300 animate-bounce">
              <ChevronDown className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Zimbabwe's Largest{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Creator Ecosystem
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting brands with influential voices and passionate audiences
              across the country
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedCounter icon={Users} label="Active Creators" value="500" />
            <AnimatedCounter
              icon={Building}
              label="Partner Brands"
              value="100"
            />
            <AnimatedCounter
              icon={TrendingUp}
              label="Monthly Reach"
              value="5000000"
            />
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trending{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Creators
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of Zimbabwe's most influential digital personalities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredCreators.map((creator, index) => (
              <CreatorCard key={index} creator={creator} index={index} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/creators"
              className="px-6 py-3 bg-purple-50 text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300 inline-flex items-center"
            >
              View All Creators
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section (Enhanced from original) */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                COCAZ
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
              We provide comprehensive support to help content creators thrive
              in the digital landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Network,
                title: "Networking Opportunities",
                description:
                  "Connect with industry leaders, brands, and fellow creators in exclusive events and workshops.",
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                description:
                  "Get personalized guidance on content strategy, audience growth, and monetization.",
              },
              {
                icon: Shield,
                title: "Brand Protection",
                description:
                  "Legal support and guidance for protecting your personal brand and intellectual property.",
              },
              {
                icon: Palette,
                title: "Creative Support",
                description:
                  "Access to professional tools, studios, and creative resources for content production.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Expand your influence beyond Zimbabwe with our international brand partnerships.",
              },
              {
                icon: MessageSquare,
                title: "Community Support",
                description:
                  "Join a thriving community of creators who support and inspire each other.",
              },
              {
                icon: Target,
                title: "Targeted Campaigns",
                description:
                  "Connect with brands that align with your niche and audience demographics.",
              },
              {
                icon: Users,
                title: "Audience Insights",
                description:
                  "Advanced analytics and insights to understand and grow your audience effectively.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-colors duration-300 border border-white/5"
              >
                <feature.icon className="w-12 h-12 text-purple-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-purple-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from creators and brands who have transformed their digital
              presence with COCAZ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="absolute inset-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
              >
                <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="url(#grid)" />
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,0 L40,0 L40,40 L0,40 Z"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
              </svg>
            </div>

            <div className="relative px-4 sm:px-6 py-12 md:px-12 md:py-20 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Ready to Elevate Your Digital Presence?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto mb-10"
              >
                Join Zimbabwe's most vibrant community of creators and brands
                today
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/join"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  Apply as Creator
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  to="/brands"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  Partner as Brand
                  <Building className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
