import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Canvas animation for the background
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight * 0.7, 700);
    };

    window.addEventListener("resize", setCanvasDimensions);
    setCanvasDimensions();

    // Animation parameters
    const particles = [];
    const particleCount = 100;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(139, 92, 246, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    // Animation loop
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.05)"); // Purple with low opacity
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.05)"); // Blue with low opacity
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

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

// Office Location Card Component
const OfficeCard = ({ city, address, email, phone, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${city} Office`} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{city}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="text-purple-600 flex-shrink-0 mt-1" size={18} />
          <p className="text-gray-700">{address}</p>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <Mail className="text-purple-600 flex-shrink-0" size={18} />
          <a href={`mailto:${email}`} className="text-gray-700 hover:text-purple-600 transition-colors">
            {email}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="text-purple-600 flex-shrink-0" size={18} />
          <a href={`tel:${phone}`} className="text-gray-700 hover:text-purple-600 transition-colors">
            {phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Team member card
const TeamMemberCard = ({ name, position, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-purple-600">{position}</p>
      </div>
    </motion.div>
  );
};

// Main Contact Page Component
const ContactPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    service: "marketing"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          service: "marketing"
        });
      }, 3000);
    }, 1500);
  };
  
  // Sample data for offices
  const offices = [
    {
      city: "Harare",
      address: "123 Samora Machel Avenue, Central Business District, Harare",
      email: "harare@cocaz.co.zw",
      phone: "+263 242 123 456",
      image: "/assets/logo4.jpeg"
    },
    {
      city: "Bulawayo",
      address: "45 Leopold Takawira Avenue, Bulawayo",
      email: "bulawayo@cocaz.co.zw",
      phone: "+263 292 987 654",
      image: "/assets/logo4.jpeg"
    },
    {
      city: "Victoria Falls",
      address: "7 Livingstone Way, Victoria Falls",
      email: "vic.falls@cocaz.co.zw",
      phone: "+263 287 456 789",
      image: "/assets/logo4.jpeg"
    }
  ];
  
  // Sample data for team members
  const teamMembers = [
    {
      name: "Takunda Tapfuma",
      position: "Co-Founder",
      image: "/taku.jpeg"
    },
    {
      name: "Wellington Bakaimani",
      position: "Co-Founder",
      image: "/welly.jpeg"
    },
    {
      name: "Victor Tinashe Mpofu",
      position: "Chairman",
      image: "/vikela.jpeg"
    },
    {
      name: "Bridget Paradza",
      position: "Vice Chairperson",
      image: "/bri.jpg"
      },

  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 py-20 sm:py-28">
        <AnimatedBackground />
        
        <div className="absolute right-0 bottom-0 w-2/3 md:w-1/2 h-full opacity-10">
          <img
            src="/assets/camp2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div style={{ opacity, y }} className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium border border-purple-200/30">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block">Let's Create</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Something Amazing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-purple-100 mb-8"
            >
              Ready to transform your content strategy? Our team of experts is here to help you create engaging, innovative content that resonates with your audience and delivers real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#contact-form"
                className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-300 text-center flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Start a Conversation
              </a>

              <div className="flex items-center text-purple-200">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Response time: within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info Section */}
      <section className="py-12 lg:py-24 relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Phone className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Call Us</h3>
                <p className="text-gray-600 mb-2">Our team is here to help</p>
                <a href="tel:+2631234567890" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  +263 12 345 67890
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Email Us</h3>
                <p className="text-gray-600 mb-2">For inquiries and quotes</p>
                <a href="mailto:hello@cocaz.co.zw" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  hello@cocaz.co.zw
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Clock className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Office Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-600">Weekends: By appointment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section id="contact-form" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50 opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tell us about your <span className="text-purple-600">project</span>
              </h2>
              
              <p className="text-gray-600 mb-8">
                We're excited to hear about your content needs. Fill out the form, and our team will get back to you within 24 hours to discuss how we can help bring your vision to life.
              </p>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll be in touch with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service Interested In <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                        >
                          <option value="marketing">Marketing Content</option>
                          <option value="social">Social Media</option>
                          <option value="strategy">Content Strategy</option>
                          <option value="production">Video Production</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? "bg-purple-400 cursor-not-allowed"
                          : "bg-purple-600 hover:bg-purple-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
                
                <img
                  src="/api/placeholder/800/900"
                  alt="Creative team"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 z-20">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-gray-700">24/7 customer support</p>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-gray-700">Fast turnaround times</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-gray-700">Innovative content solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Offices</span> Across Zimbabwe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our locations or contact the office nearest to you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <OfficeCard 
                key={index}
                city={office.city}
                address={office.address}
                email={office.email}
                phone={office.phone}
                image={office.image}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need a custom quote for your project?</h3>
              <p className="text-gray-700">We offer personalized solutions to meet your specific needs</p>
            </div>
            
            <a
              href="tel:+2631234567890"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              Call for Quote: +263 12 345 67890
            </a>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The creative minds behind our successful content strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What content services do you offer?",
                answer: "We provide a full range of content services including content strategy development, copywriting, blog posts, social media content, video production, graphic design, and content marketing campaigns tailored specifically for the Zimbabwean market."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. A basic content package may take 1-2 weeks, while comprehensive campaigns might take 4-8 weeks from conception to completion. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with clients outside Zimbabwe?",
                answer: "Yes! While we specialize in content for the Zimbabwean market, we work with international clients who want to reach African audiences or need expertise in local content creation."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have expertise across multiple industries including tourism, agriculture, finance, technology, education, and retail. Our team includes specialists with deep knowledge in these sectors."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-700 mb-6">Still have questions? We're here to help!</p>
            
              <a href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
            >
              <MessageSquare size={18} />
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Connect With Us <span className="text-purple-300">Online</span>
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, tips, and content inspiration
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Instagram size={24} />, name: "Instagram", handle: "@cocaz_zw" },
              { icon: <Twitter size={24} />, name: "Twitter", handle: "@cocaz_zw" },
              { icon: <Youtube size={24} />, name: "YouTube", handle: "CocazZW" },
              { icon: <Linkedin size={24} />, name: "LinkedIn", handle: "cocaz-content" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  {social.icon}
                </div>
                <h3 className="font-bold mb-1">{social.name}</h3>
                <p className="text-purple-200 text-sm">{social.handle}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-700 mb-6">
                  Get the latest content tips, industry insights, and exclusive offers delivered directly to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <ArrowRight size={18} />
                    Subscribe
                  </button>
                </form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden md:block"
              >
                <img
                  src="/assets/logo4.jpeg"
                  alt="Newsletter"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us <span className="text-purple-600">Here</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our headquarters in Harare or any of our other offices
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Interactive Map Component */}
            <div className="h-96 relative">
              {/* This is a placeholder for the actual map */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <img
                  src="/api/placeholder/1200/500"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 backdrop-blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full p-3">
                  <MapPin size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">COCAZ</h3>
              <p className="text-gray-400 mb-6">
                Zimbabwe's premier content agency delivering innovative and engaging content solutions for businesses of all sizes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Strategy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Copywriting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Production</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">123 Samora Machel Avenue, Harare</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-purple-400 flex-shrink-0" />
                  <a href="tel:+2631234567890" className="text-gray-400 hover:text-white transition-colors">+263 12 345 67890</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-purple-400 flex-shrink-0" />
                  <a href="mailto:hello@cocaz.co.zw" className="text-gray-400 hover:text-white transition-colors">hello@cocaz.co.zw</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Mon-Fri: 8am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} COCAZ. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;