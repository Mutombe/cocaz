import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Network,
  Users,
  Building,
  ChevronRight,
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Link as LinkIcon,
  UserPlus,
  Award,
  TrendingUp,
  Globe,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

// Component for animated section headings
const SectionHeading = ({ title, subtitle, align = "center" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === 1 ? (
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                {word}{" "}
              </span>
            ) : (
              <span>
                {i > 0 ? " " : ""}
                {word}
              </span>
            )}
          </span>
        ))}
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

// Network stat card component
const NetworkStat = ({ icon: Icon, number, label, delay }) => {
  const [count, setCount] = useState(0);
  const statRef = useRef(null);
  const numValue = parseInt(number.replace(/,/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const duration = 2000;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * numValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
          observer.unobserve(statRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [numValue]);

  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300"
    >
      <Icon className="w-12 h-12 text-purple-600 mb-4" />
      <h3 className="text-3xl font-bold text-gray-900">
        {count.toLocaleString()}
        <span className="text-purple-600">+</span>
      </h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

// Event card component
const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">{event.date}</span>
        </div>
        <div className="absolute bottom-4 right-4 text-white flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{event.location}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-500">{event.time}</span>
          </div>

          <Link
            to={event.link}
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
          >
            Learn more
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial component
const NetworkingTestimonial = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 relative border-t-4 border-purple-600"
    >
      <div className="absolute -top-6 -left-6">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="pt-4">
        <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <div className="flex items-center text-sm text-gray-500">
              <span>{testimonial.position}</span>
              {testimonial.companyLogo && (
                <img
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  className="h-4 ml-2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Connection process step component
const ConnectionStep = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Step number circle */}
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold z-10">
        {index + 1}
      </div>

      {/* Content box */}
      <div className="pl-20 pb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 mb-4">{step.description}</p>

        {step.benefits && (
          <ul className="space-y-2">
            {step.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Connecting line */}
      {index < 3 && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-purple-200" />
      )}
    </motion.div>
  );
};

// Success story card component
const SuccessStory = ({ story, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-56">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">{story.connection}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 flex-1">{story.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-900">
              {story.result}
            </span>
          </div>

          <Link
            to={story.link}
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
          >
            Full Story
            <ExternalLink className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Partner logo component
const PartnerLogo = ({ partner, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-24"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-12 max-w-full object-contain"
      />
    </motion.div>
  );
};

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
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(
          Math.random() * 100 + 100
        )}, ${Math.floor(Math.random() * 100)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.02;

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
        80,
        (canvas.width * canvas.height) / 20000
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

// Feature card component
const NetworkFeature = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-2 border-purple-600"
    >
      <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

// Main Networking Services component
const NetworkingServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Sample events data
  const upcomingEvents = [
    {
      title: "Creator Mixer: Tech & Media",
      date: "April 15, 2025",
      location: "Harare, Zimbabwe",
      time: "6:00 PM - 9:00 PM",
      description:
        "Exclusive networking event connecting tech innovators with media professionals for collaboration opportunities.",
      image: "/event1.jpg",
      link: "/events/creator-mixer-tech",
    },
    {
      title: "Brand Connect Summit",
      date: "May 8, 2025",
      location: "Bulawayo, Zimbabwe",
      time: "9:00 AM - 4:00 PM",
      description:
        "A full-day summit bringing together top brands and influential creators for partnership discussions.",
      image: "/event2.jpg",
      link: "/events/brand-connect-summit",
    },
    {
      title: "Industry Roundtable: Fashion & Beauty",
      date: "June 3, 2025",
      location: "Victoria Falls, Zimbabwe",
      time: "2:00 PM - 5:30 PM",
      description:
        "Intimate roundtable discussion with fashion industry leaders and beauty content creators.",
      image: "/event3.jpg",
      link: "/events/fashion-beauty-roundtable",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: "Madam Boss",
      position: "Tech Content Creator",
      company: "Madam Boss",
      avatar: "/madam.jpeg",
      text: "The networking opportunities through COCAZ have been game-changing for my career. I've connected with international tech brands that I couldn't have reached otherwise.",
    },
    {
      name: "Loraine Guyo",
      position: "Lifestyle Influencer",
      avatar: "/assets/loraine.jpg",
      text: "I attended my first COCAZ networking event feeling nervous, but the community was so welcoming. Within three months, I secured partnerships with three major lifestyle brands.",
    },
    {
      name: "Kuda Rashman",
      position: "Actor",
      company: "",
      companyLogo: "/autward.png",
      avatar: "/assets/rashman.jpg",
      text: "As a brand representative, COCAZ's networking services provide a structured approach to finding and vetting the perfect creator partners for our campaigns.",
    },
  ];

  // Connection process steps
  const connectionSteps = [
    {
      title: "Profile Development",
      description:
        "Our team works with you to develop a professional creator or brand profile that highlights your unique value proposition.",
      benefits: [
        "Expert guidance on positioning your strengths",
        "Professional profile optimization",
        "Custom pitch development for potential partners",
      ],
    },
    {
      title: "Strategic Matching",
      description:
        "Using our proprietary algorithm and industry expertise, we identify potential partners that align with your goals and values.",
      benefits: [
        "AI-powered matching technology",
        "Customized partnership recommendations",
        "Pre-vetted quality connections",
      ],
    },
    {
      title: "Facilitated Introductions",
      description:
        "We personally facilitate introductions between matched creators and brands to ensure a smooth start to the relationship.",
      benefits: [
        "Guided first meetings with potential partners",
        "Communication support and coaching",
        "Feedback collection and implementation",
      ],
    },
    {
      title: "Ongoing Support",
      description:
        "Our relationship managers provide continuous support to nurture and grow successful partnerships over time.",
      benefits: [
        "Regular check-ins and progress tracking",
        "Conflict resolution when needed",
        "Growth strategy development for long-term success",
      ],
    },
  ];

  // Success stories
  const successStories = [
    {
      title: "Fashion Brand Collaboration",
      connection: "Fashion Creator + Local Clothing Brand",
      description:
        "A rising fashion creator with 50K followers connected with a local designer brand, resulting in a limited edition collection that sold out in 48 hours.",
      result: "300% ROI for the brand, 15K new followers for the creator",
      image: "/fashion.webp",
      link: "/success-stories/fashion-collab",
    },
    {
      title: "Tech Education Partnership",
      connection: "Tech Creator + EdTech Company",
      description:
        "A tech content creator specialized in tutorials partnered with an education platform to develop Zimbabwe's first comprehensive coding course in Shona.",
      result: "20,000+ students enrolled in first 3 months",
      image: "/edtech.jpg",
      link: "/success-stories/tech-education",
    },
    {
      title: "Travel Content Series",
      connection: "Travel Vlogger + Tourism Board",
      description:
        "A travel vlogger connected with Zimbabwe's tourism board to create a documentary series showcasing hidden gems across the country.",
      result: "18% increase in domestic tourism to featured locations",
      image: "/tourism.jpg",
      link: "/success-stories/travel-series",
    },
  ];

  // Network features
  const networkFeatures = [
    {
      icon: Globe,
      title: "Global Connections",
      description:
        "Access to both local and international partners through our extensive network spanning 15+ countries.",
    },
    {
      icon: Target,
      title: "Targeted Matching",
      description:
        "Our AI-powered matching system ensures you connect with partners that align with your specific niche and audience.",
    },
    {
      icon: UserPlus,
      title: "VIP Introductions",
      description:
        "Exclusive opportunities to connect with high-profile brands and creators not available through standard channels.",
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description:
        "Priority access to invitation-only networking events, workshops, and industry roundtables.",
    },
    {
      icon: MessageSquare,
      title: "Facilitated Communication",
      description:
        "Professional mediators help navigate partnership negotiations and establish clear expectations.",
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description:
        "Advanced analytics to measure the impact and growth resulting from your network connections.",
    },
  ];

  // Partners logos
  const partners = [
    { name: "Buy Zimbabwe", logo: "/buyzim.png" },
    { name: "CoolSplash", logo: "/coolsplash.png" },
    { name: "Greylink", logo: "/greylink.png" },
    { name: "Autoward", logo: "/autoward.png" },
    { name: "COCAZ", logo: "/assets/logo4.jpeg" },
  ];

  return (
    <div className="min-h-screen relative pt-20">
      {/* Hero Section with Particle Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900"></div>
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
                COCAZ Networking Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              <span className="block drop-shadow-lg">
                Connect. Collaborate.
              </span>
              <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                Create Magic Together.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Building meaningful connections between Zimbabwe's visionary
              creators and forward-thinking brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/services/networking/apply"
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 hover:shadow-lg shadow-purple-700/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Join Our Network
                <Network className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/services/networking/events"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Upcoming Events
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Network Stats Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Network Reach"
            subtitle="Connecting Zimbabwe's digital ecosystem like never before"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NetworkStat
              icon={Users}
              number="500"
              label="Active Creators"
              delay={0}
            />
            <NetworkStat
              icon={Building}
              number="100"
              label="Partner Brands"
              delay={0.1}
            />
            <NetworkStat
              icon={Network}
              number="250"
              label="Successful Partnerships"
              delay={0.2}
            />
            <NetworkStat
              icon={Globe}
              number="15"
              label="Countries Reached"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Network Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Network Benefits"
            subtitle="What makes COCAZ's networking services unique in the industry"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkFeatures.map((feature, index) => (
              <NetworkFeature key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Connection Process Section with Steps */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Connection Process"
            subtitle="A proven methodology to create lasting, valuable partnerships"
          />

          <div className="mt-12">
            {connectionSteps.map((step, index) => (
              <ConnectionStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Exclusive networking opportunities to connect in person"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/services/networking/events"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-300"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Success Stories"
            subtitle="Real results from connections made through our network"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <SuccessStory key={index} story={story} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/success-stories"
              className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              Explore All Success Stories
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Network Testimonials"
            subtitle="Hear from creators and brands who have benefited from our networking services"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <NetworkingTestimonial
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Network Partners"
            subtitle="Leading brands that trust COCAZ for creator connections"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to expand your network and create meaningful connections?
            </h2>

            <p className="text-xl text-white/90 mb-10">
              Whether you're a creator looking for brand partnerships or a brand
              seeking authentic creator collaborations, COCAZ's networking
              services provide the platform you need to thrive.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services/networking/apply"
                className="w-full sm:w-auto px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Join Our Network
                <UserPlus className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Contact Our Team
                <MessageSquare className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Networking Resources"
            subtitle="Helpful guides and tools to maximize your networking success"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <LinkIcon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Creator Profile Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to craft an impressive creator profile that attracts
                  the right brand partnerships.
                </p>
                <Link
                  to="/resources/creator-profile-guide"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
                >
                  Download Guide
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <Building className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Brand Partnership Playbook
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategic frameworks for brands looking to develop effective
                  creator partnerships.
                </p>
                <Link
                  to="/resources/brand-partnership-playbook"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
                >
                  Download Playbook
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <Target className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Networking Event Calendar
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with all upcoming networking opportunities and
                  industry events.
                </p>
                <Link
                  to="/resources/event-calendar"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
                >
                  View Calendar
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkingServicesPage;
