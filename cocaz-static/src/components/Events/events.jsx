import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ExternalLink,
  Filter,
  Users,
  Star,
  ChevronDown,
  Play,
  Building,
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

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasDimensions);
    setCanvasDimensions();

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
      );
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

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

// Video background component
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-10"></div>
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

// Enhanced Event Card with portrait image support
const EventCard = ({ event, index, isPast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group backdrop-blur-sm bg-white/95"
      whileHover={{ scale: 1.02, translateY: -5 }}
    >
      {/* Portrait Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <div className="absolute top-4 right-4">
          <span className={`${
            isPast ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-blue-600'
          } text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
            {isPast ? 'Past Event' : 'Upcoming'}
          </span>
        </div>

        {event.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg">
              <Star size={12} className="mr-1" />
              Featured
            </span>
          </div>
        )}

        {/* Event category overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-purple-600" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-purple-600" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-purple-600" />
            <span className="text-sm">{event.location}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center space-x-2">
              <Users size={16} className="text-purple-600" />
              <span className="text-sm">{event.attendees} attending</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg"
          >
            <span>{isPast ? 'View Recap' : 'Learn More'}</span>
            <ArrowRight size={16} />
          </motion.button>

          {!isPast && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-purple-50 transition-colors duration-300"
            >
              <span>Register</span>
              <ExternalLink size={16} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Filter Button Component
const FilterButton = ({ active, onClick, children }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`${
        active 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
          : 'bg-white/10 backdrop-blur-md text-white border border-white/30'
      } px-4 py-2 rounded-full text-sm font-medium transition-all duration-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// Stats Card Component
const StatsCard = ({ icon: Icon, label, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-12 h-12 text-purple-300 mb-4 mx-auto" />
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <p className="text-purple-200">{label}</p>
    </motion.div>
  );
};

// Main Events Page Component
const EventsPage = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Enhanced events data with portrait images and additional details
  const events = [
    {
      title: "COCAZ Seminar with Nigerian Actors",
      date: "March 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Cape Town, South Africa",
      description: "Join us for an exclusive seminar featuring renowned Nigerian actors including Genevieve Nnaji and Ramsey Nouah. Learn about cross-border collaborations, Nollywood insights, and content creation strategies for the African market.",
      category: "seminar",
      image: "/2.jpeg",
      attendees: "250+",
      featured: true
    },
    {
      title: "New Zambian Movie Launch: 'Heritage'",
      date: "February 28, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Lusaka, Zambia",
      description: "Be part of the grand premiere of 'Heritage', the latest Zambian blockbuster featuring COCAZ creators and showcasing authentic African storytelling. Red carpet, interviews, and exclusive after-party included.",
      category: "premiere",
      image: "/1.jpeg",
      attendees: "400+",
      featured: true
    },
    {
      title: "COCAZ Creator Bootcamp 2025",
      date: "April 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Harare International Conference Centre",
      description: "Annual creator summit featuring workshops on monetization, brand partnerships, content strategy, and the future of digital content creation in Africa. Network with industry leaders and top creators.",
      category: "conference",
      image: "/assets/boot-camp.jpg",
      attendees: "500+",
      featured: false
    },
    {
      title: "African Film Festival Collaboration",
      date: "May 10, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Victoria Falls, Zimbabwe",
      description: "COCAZ partners with the African Film Festival to showcase creator-produced content and documentaries. Meet filmmakers, participate in panel discussions, and explore new storytelling mediums.",
      category: "festival",
      image: "/4.jpeg",
      attendees: "300+",
      featured: false
    },
    {
      title: "Women in Content Creation Summit",
      date: "December 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Victoria Falls, Zimbabwe",
      description: "Empowering female content creators across Africa with specialized workshops on leadership, entrepreneurship, and building sustainable creative businesses in the digital age.",
      category: "summit",
      image: "/women.jpeg",
      attendees: "180+",
      featured: false
    },
    {
      title: "Youth Creator Workshop",
      date: "September 18, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Bulawayo, Zimbabwe",
      description: "Special workshop designed for young creators aged 16-25. Learn the basics of content creation, social media management, and building your personal brand from successful young influencers.",
      category: "workshop",
      image: "/assets/bootcamp5.jpg",
      attendees: "150+",
      featured: false
    },

  ];

  const categories = [...new Set(events.map(event => event.category))];
  const currentDate = new Date();

  const filteredEvents = useMemo(() => {
    return events
      .filter(event => {
        const eventDate = new Date(event.date);
        const isPast = eventDate < currentDate;
        
        if (filter === 'upcoming' && isPast) return false;
        if (filter === 'past' && !isPast) return false;
        if (filter === 'featured' && !event.featured) return false;
        if (categoryFilter !== 'all' && event.category !== categoryFilter) return false;
        
        return true;
      })
      .sort((a, b) => {
        if (filter === 'upcoming') {
          return new Date(a.date) - new Date(b.date);
        }
        return new Date(b.date) - new Date(a.date);
      });
  }, [filter, categoryFilter, currentDate]);

  const upcomingEventsCount = events.filter(event => new Date(event.date) >= currentDate).length;
  const pastEventsCount = events.filter(event => new Date(event.date) < currentDate).length;
  const totalAttendees = events.reduce((sum, event) => sum + parseInt(event.attendees?.replace('+', '') || '0'), 0);

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
              <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 shadow-lg">
                COCAZ Events & Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              <span className="block drop-shadow-lg">
                Discover Amazing
              </span>
              <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                Creator Events
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow-lg"
            >
              Connect, learn, and grow with Zimbabwe's most vibrant community of content creators and industry professionals
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-10 left-0 right-0 text-center"
            >
              <button className="text-white hover:text-white transition-colors duration-300 animate-bounce">
                <ChevronDown className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard 
              icon={Calendar} 
              label="Upcoming Events" 
              value={upcomingEventsCount} 
            />
            <StatsCard 
              icon={Users} 
              label="Total Attendees" 
              value={`${totalAttendees}+`} 
            />
            <StatsCard 
              icon={Award} 
              label="Events Hosted" 
              value={events.length} 
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Time Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <Filter size={16} className="text-purple-300" />
                <span className="text-white text-sm font-medium">Filter by Time:</span>
              </div>
              <FilterButton 
                active={filter === 'all'} 
                onClick={() => setFilter('all')}
              >
                All Events
              </FilterButton>
              <FilterButton 
                active={filter === 'upcoming'} 
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </FilterButton>
              <FilterButton 
                active={filter === 'past'} 
                onClick={() => setFilter('past')}
              >
                Past Events
              </FilterButton>
              <FilterButton 
                active={filter === 'featured'} 
                onClick={() => setFilter('featured')}
              >
                Featured
              </FilterButton>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 mb-2">
                <Building size={16} className="text-purple-300" />
                <span className="text-white text-sm font-medium">Filter by Category:</span>
              </div>
              <FilterButton 
                active={categoryFilter === 'all'} 
                onClick={() => setCategoryFilter('all')}
              >
                All Categories
              </FilterButton>
              {categories.map(category => (
                <FilterButton 
                  key={category}
                  active={categoryFilter === category} 
                  onClick={() => setCategoryFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </FilterButton>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${filter}-${categoryFilter}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredEvents.map((event, index) => (
                <EventCard 
                  key={`${event.title}-${index}`}
                  event={event} 
                  index={index}
                  isPast={new Date(event.date) < currentDate}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Events Found
                </h3>
                <p className="text-gray-600 mb-6">
                  No events match your current filter criteria. Try adjusting your filters to see more events.
                </p>
                <button
                  onClick={() => {
                    setFilter('all');
                    setCategoryFilter('all');
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600">
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

            <div className="relative px-6 py-20 md:px-12 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Want to Host an Event with COCAZ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-purple-100 max-w-3xl mx-auto mb-10"
              >
                Partner with us to create unforgettable experiences for the creator community
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  to="/partnerships"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;