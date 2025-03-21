import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Mic, 
  PenTool, 
  Camera, 
  Film, 
  CheckCircle, 
  PlayCircle, 
  ChevronDown, 
  MessageSquare,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const ContentCreationPage = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    // Particle animation effect
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = 500; // Fixed height for hero section
        };

        window.addEventListener("resize", setCanvasDimensions);
        setCanvasDimensions();

        // Create particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `rgba(${Math.floor(Math.random() * 100 + 150)}, 
                           ${Math.floor(Math.random() * 50)}, 
                           ${Math.floor(Math.random() * 255)}, 
                           ${Math.random() * 0.5 + 0.1})`;
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
            const numberOfParticles = Math.min(70, (canvas.width * canvas.height) / 15000);
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

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsVideoPlaying(!isVideoPlaying);
        }
    };

    // Sample portfolio items
    const portfolioItems = [
        {
            title: "Buy Zimbabwe",
            type: "Video Production",
            image: "/buyzim.jpg",
            views: "1.2M",
            engagement: "8.5%"
        },
        {
            title: "CoolSplash",
            type: "Social Media Content",
            image: "/coolsplash.png",
            views: "950K",
            engagement: "7.2%"
        },
        {
            title: "Sun Soya",
            type: "Photography & Design",
            image: "/sunsoya.jpg",
            views: "780K",
            engagement: "6.9%"
        },
        {
            title: "Autoward Electronics",
            type: "Multi-platform Content",
            image: "/autoward.jpg",
            views: "1.5M",
            engagement: "9.3%"
        }
    ];

    // Content creation services
    const contentServices = [
        {
            icon: Video,
            title: "Video Production",
            description: "Professional video content for advertising, social media, and brand storytelling.",
            features: ["Concept Development", "Shooting", "Editing", "Animation"]
        },
        {
            icon: ImageIcon,
            title: "Photography",
            description: "High-quality photography for products, events, and promotional materials.",
            features: ["Product Photography", "Lifestyle Shoots", "Event Coverage", "Aerial Photography"]
        },
        {
            icon: PenTool,
            title: "Graphic Design",
            description: "Eye-catching visuals and designs that elevate your brand across all platforms.",
            features: ["Social Media Graphics", "Branding Materials", "Print Designs", "Digital Assets"]
        },
        {
            icon: Mic,
            title: "Audio Content",
            description: "Engaging audio content including podcasts, jingles, and voice-overs.",
            features: ["Podcast Production", "Audio Ads", "Voice-over Services", "Sound Design"]
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Sarah Moyo",
            position: "Managing Director, Buy Zimbabwe",
            content: "The content creation team at COCAZ delivered beyond our expectations. Their creative approach to our campaign resulted in record-breaking engagement rates.",
            avatar: "/ellen.jpeg",
            rating: 5
        },
        {
            name: "Joshua Mundevhani",
            position: "Marketing Manager, CoolSplash",
            content: "Working with COCAZ has transformed how we approach content. Their team understands the Zimbabwean market and creates content that truly resonates with our audience.",
            avatar: "/ian.jpeg",
            rating: 5
        }
    ];

    return (
        <div className="pt-20 min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-96 sm:h-[500px] flex items-center justify-center overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 z-0"></div>
                <canvas ref={canvasRef} className="absolute inset-0 z-10" />
        
                {/* Content overlay */}
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        style={{ opacity: heroOpacity }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 inline-flex items-center">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Premium Content Creation Services
                            </span>
                        </motion.div>
            
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            <span className="block drop-shadow-lg">Captivating Content</span>
                            <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                                That Drives Results
                            </span>
                        </motion.h1>
            
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto"
                        >
                            Our team of creative professionals delivers stunning, conversion-focused content that helps your brand stand out in Zimbabwe's digital landscape.
                        </motion.p>
            
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
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
              
                            <button
                                onClick={toggleVideo}
                                className="w-full sm:w-auto px-6 py-4 bg-white/20 border-2 border-white backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                            >
                                Watch Our Reel
                                <PlayCircle className="ml-2 w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
        
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <button className="text-white hover:text-white/80 transition-colors duration-300 animate-bounce pb-6">
                        <ChevronDown className="w-6 h-6" />
                    </button>
                </div>
            </section>
      
            {/* Video Modal */}
            {isVideoPlaying && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
                        <button
                            onClick={toggleVideo}
                            className="absolute top-4 right-4 bg-white/20 rounded-full p-2 backdrop-blur-sm text-white hover:bg-white/40 transition-colors z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            className="w-full aspect-video"
                        >
                            <source src="/assets/videos/content-reel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
      
            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4"
                        >
                            Our Services
                        </motion.span>
            
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                        >
                            Content Creation That
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Amplifies Your Brand</span>
                        </motion.h2>
            
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600"
                        >
                            From concept to execution, our comprehensive content creation services are designed to elevate your brand's digital presence and drive meaningful engagement.
                        </motion.p>
                    </div>
          
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contentServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 transition-all duration-300 group border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                
                                <Link
                                    to={`/services/content-creation/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="mt-6 inline-flex items-center font-medium text-purple-600 hover:text-purple-800 transition-colors"
                                >
                                    Learn more
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
      
            {/* Portfolio Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4"
                        >
                            Our Work
                        </motion.span>
            
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                        >
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Content Projects</span>
                        </motion.h2>
            
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600"
                        >
                            Explore some of our most successful content campaigns that delivered exceptional results for leading Zimbabwean brands.
                        </motion.p>
                    </div>
          
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                                </div>
                
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <span className="text-purple-200 text-sm mb-2 block">{item.type}</span>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  
                                    <div className="flex justify-between text-white/80 text-sm">
                                        <span>Views: {item.views}</span>
                                        <span>Engagement: {item.engagement}</span>
                                    </div>
                                </div>
                
                                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <button className="bg-white text-purple-600 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
          
                    <div className="text-center mt-12">
                        <Link
                            to="/portfolio"
                            className="px-6 py-3 bg-purple-50 text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300 inline-flex items-center"
                        >
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
      
            {/* Process Section */}
            <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium inline-block mb-4"
                        >
                            Our Process
                        </motion.span>
            
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl font-bold mb-6"
                        >
                            How We Create
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"> Exceptional Content</span>
                        </motion.h2>
            
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-purple-100"
                        >
                            Our proven 4-step process ensures we deliver content that meets your goals and resonates with your audience
                        </motion.p>
                    </div>
          
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "01",
                                title: "Discovery",
                                description: "We dive deep into understanding your brand, audience, and objectives to create a strategic content foundation.",
                                icon: MessageSquare
                            },
                            {
                                number: "02",
                                title: "Conceptualization",
                                description: "Our creative team develops innovative content concepts aligned with your brand identity and campaign goals.",
                                icon: PenTool
                            },
                            {
                                number: "03",
                                title: "Production",
                                description: "We bring concepts to life with high-quality production, utilizing cutting-edge equipment and creative techniques.",
                                icon: Camera
                            },
                            {
                                number: "04",
                                title: "Delivery & Optimization",
                                description: "We deliver polished content optimized for multiple platforms, with analytics to measure performance.",
                                icon: Film
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-colors duration-300 border border-white/5 relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                    {step.number}
                                </div>
                
                                <div className="mb-4 pt-4">
                                    <step.icon className="w-10 h-10 text-purple-300" />
                                </div>
                
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-purple-100">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
      
            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4"
                        >
                            Testimonials
                        </motion.span>
            
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                        >
                            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Clients Say</span>
                        </motion.h2>
            
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600"
                        >
                            Hear from brands who have transformed their digital presence with our content creation services
                        </motion.p>
                    </div>
          
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg relative border border-gray-100"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </div>
                
                                <div className="mt-6">
                                    <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
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
                                                    className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                                                    fill={i < testimonial.rating ? "#EAB308" : "none"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
      
        </div>
    )
};

export default ContentCreationPage;