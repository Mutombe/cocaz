import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart,
  Users,
  Target,
  Award,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Clock,
  CheckCircle,
} from "lucide-react";

// Animated background component with gradient mesh
const GradientMeshBackground = () => {
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

    // Animation loop
    const render = (time) => {
      time *= 0.001; // Convert time to seconds

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.2)"); // Purple with low opacity
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.2)"); // Blue with low opacity

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated mesh grid
      const gridSize = 50;
      const amplitude = 5;
      const frequency = 0.1;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 5) {
          const distortionX = Math.sin(y * frequency + time) * amplitude;

          if (y === 0) {
            ctx.moveTo(x + distortionX, y);
          } else {
            ctx.lineTo(x + distortionX, y);
          }
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const distortionY = Math.sin(x * frequency + time) * amplitude;

          if (x === 0) {
            ctx.moveTo(x, y + distortionY);
          } else {
            ctx.lineTo(x, y + distortionY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

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

// Marketing case study card
const CaseStudyCard = ({ study, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/30 inline-block mb-2">
            {study.category}
          </span>
          <h3 className="text-xl font-bold text-white">{study.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{study.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {study.platforms.map((platform, i) => {
                const Icon =
                  platform === "instagram"
                    ? Instagram
                    : platform === "youtube"
                    ? Youtube
                    : Twitter;

                return (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      platform === "instagram"
                        ? "bg-pink-500"
                        : platform === "youtube"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                );
              })}
            </div>
            <span className="text-gray-500 text-sm">+{study.reach}</span>
          </div>

          <span className="text-sm font-medium text-purple-600 flex items-center gap-1">
            View Details
            <ChevronRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Service feature card
const ServiceFeature = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
        <Icon size={24} className="text-purple-600" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Process step component
const ProcessStep = ({ number, title, description, image, isLast }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-purple-200 hidden md:block"></div>
      )}

      {/* Step number */}
      <div className="flex flex-shrink-0 items-start">
        <div className="w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold flex items-center justify-center z-10">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

// Marketing metrics component
const MarketingMetrics = () => {
  // Animated counter hook
  const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let startTime;
            const updateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              setCount(Math.floor(progress * target));

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };

            requestAnimationFrame(updateCount);
            observer.unobserve(nodeRef.current);
          }
        },
        { threshold: 0.1 }
      );

      if (nodeRef.current) {
        observer.observe(nodeRef.current);
      }

      return () => {
        if (nodeRef.current) {
          observer.unobserve(nodeRef.current);
        }
      };
    }, [target, duration]);

    return [count, nodeRef];
  };

  const [reachCount, reachRef] = useCounter(5000000);
  const [campaignCount, campaignRef] = useCounter(250);
  const [conversionCount, conversionRef] = useCounter(15);
  const [growthCount, growthRef] = useCounter(300);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        ref={reachRef}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <Globe className="w-10 h-10 text-purple-600 mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">
          {reachCount.toLocaleString()}+
        </h3>
        <p className="text-gray-600">Monthly Audience Reach</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        ref={campaignRef}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <Target className="w-10 h-10 text-purple-600 mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">{campaignCount}+</h3>
        <p className="text-gray-600">Successful Campaigns</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={conversionRef}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">{conversionCount}%</h3>
        <p className="text-gray-600">Higher Conversion Rate</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        ref={growthRef}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <Users className="w-10 h-10 text-purple-600 mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">{growthCount}%</h3>
        <p className="text-gray-600">Average Follower Growth</p>
      </motion.div>
    </div>
  );
};

// Pricing component
const PricingPlan = ({ title, price, features, isPopular, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl shadow-xl overflow-hidden ${
        isPopular ? "ring-2 ring-purple-500 transform lg:-translate-y-4" : ""
      }`}
    >
      {isPopular && (
        <div className="bg-purple-600 text-white text-center py-2 font-medium text-sm">
          Most Popular
        </div>
      )}

      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>

        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>

        <div className="space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle
                size={18}
                className="text-purple-600 flex-shrink-0 mt-0.5"
              />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
            isPopular
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-100 hover:bg-purple-200 text-purple-600"
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

// FAQ Accordion Item
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-900 hover:text-purple-600 transition-colors duration-300"
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </motion.div>
  );
};

// Main Marketing Page Component
const MarketingPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const [activeTab, setActiveTab] = useState("influencer");
  const [openFAQ, setOpenFAQ] = useState(null);

  // Sample case studies
  const caseStudies = [
    {
      title: "Zim Busuits Summer Campaign",
      category: "Food",
      description:
        "Our creators helped Zim Buscuits reach 1.2M young Zimbabweans, resulting in a 24% engagement rate and 15% conversion.",
      image: "/zimbiscutes.jpg",
      platforms: ["instagram", "twitter", "youtube"],
      reach: "1.2M",
    },
    {
      title: "Sun Soya",
      category: "Food",
      description:
        "Strategic influencer marketing helped Sun Soya achieve 300K reach in the first month of their new product launch.",
      image: "/sunsoya.jpg",
      platforms: ["instagram", "twitter"],
      reach: "950K",
    },
    {
      title: "CoolSplash",
      category: "Beverage",
      description:
        "Creator-led campaign resulted in CoolSplash becoming the most photographed brand at Zimbabwe`s largest music festival.",
      image: "/coolsplash.png",
      platforms: ["instagram", "youtube"],
      reach: "750K",
    },
  ];

  // Sample marketing FAQs
  const faqs = [
    {
      question: "How do you measure campaign success?",
      answer:
        "We employ comprehensive analytics across all platforms to track key performance indicators including reach, engagement rate, click-through rate, conversions, and ROI. Each campaign includes detailed reporting with actionable insights for future optimization.",
    },
    {
      question: "How do you select creators for brand campaigns?",
      answer:
        "Our creator selection process considers audience demographics, engagement quality, content style, previous campaign performance, and brand alignment. We use data-driven insights to match the right creators with your brand goals and target audience.",
    },
    {
      question: "What types of marketing campaigns do you offer?",
      answer:
        "We offer a full spectrum of creator-led marketing campaigns including product launches, brand awareness, content creation, event promotion, platform-specific campaigns (TikTok, Instagram, YouTube, etc.), long-term brand ambassadorships, and integrated multi-channel campaigns.",
    },
    {
      question: "How long does it take to set up and execute a campaign?",
      answer:
        "Timeline varies based on campaign complexity, but typically ranges from 2-6 weeks from initial brief to execution. Urgent campaigns can be expedited with our rapid response option for time-sensitive marketing needs.",
    },
    {
      question: "Do you work with creators outside Zimbabwe?",
      answer:
        "Yes, we have an expanding network of pan-African creators across the continent. Our regional partnerships allow us to execute campaigns targeting specific African markets or create pan-African campaigns with coordinated creator efforts.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 py-20 sm:py-24">
        <GradientMeshBackground />

        <div className="absolute right-0 bottom-0 w-2/3 md:w-1/2 h-full opacity-10">
          <img
            src="/marketing1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div style={{ opacity, y }} className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <Link
                to="/services"
                className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center gap-1 text-sm font-medium"
              >
                <ChevronRight size={16} className="transform rotate-180" />
                Back to Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium border border-purple-200/30">
                COCAZ Marketing Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block">Influencer-Powered</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Marketing Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-purple-100 mb-8"
            >
              Connect with Zimbabwe's most influential voices to amplify your
              brand message and engage with targeted audiences through
              authentic, creator-driven campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-300 text-center"
              >
                Start a Campaign
              </a>

              <a
                href="#case-studies"
                className="px-6 py-3 bg-purple-700/30 text-white border border-purple-500/50 rounded-lg font-medium hover:bg-purple-700/50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View Case Studies
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
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
              Leading Zimbabwe's
              <span className="text-purple-600"> Influencer Marketing</span>{" "}
              Revolution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable results that connect
              brands with engaged audiences
            </p>
          </motion.div>

          <MarketingMetrics />
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Comprehensive</span> Marketing
              Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for every stage of your marketing journey
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("influencer")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "influencer"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Influencer Marketing
            </button>

            <button
              onClick={() => setActiveTab("content")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "content"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Content Creation
            </button>

            <button
              onClick={() => setActiveTab("strategy")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "strategy"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Strategy & Analytics
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "events"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Events & Activations
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "influencer" && (
              <>
                <ServiceFeature
                  icon={Users}
                  title="Creator Partnerships"
                  description="Strategic collaborations with Zimbabwe's top influencers tailored to your brand identity and campaign objectives."
                  delay={0}
                />
                <ServiceFeature
                  icon={Target}
                  title="Audience Targeting"
                  description="Precision targeting based on demographics, interests, and behavior to reach your ideal customers."
                  delay={0.1}
                />
                <ServiceFeature
                  icon={Award}
                  title="Campaign Management"
                  description="End-to-end campaign oversight including strategy, creator briefs, content approval, and performance tracking."
                  delay={0.2}
                />
              </>
            )}

            {activeTab === "content" && (
              <>
                <ServiceFeature
                  icon={Globe}
                  title="Multi-Platform Content"
                  description="Custom content creation for Instagram, TikTok, YouTube and other platforms tailored to your campaign objectives."
                  delay={0}
                />
                <ServiceFeature
                  icon={MessageSquare}
                  title="Authentic Storytelling"
                  description="Strategic narrative development that resonates with audiences while maintaining creator authenticity."
                  delay={0.1}
                />
                <ServiceFeature
                  icon={Palette}
                  title="Content Production"
                  description="Professional photography, videography, and graphic design services for high-quality marketing assets."
                  delay={0.2}
                />
              </>
            )}

            {activeTab === "strategy" && (
              <>
                <ServiceFeature
                  icon={Target}
                  title="Market Research"
                  description="In-depth analysis of Zimbabwean consumer trends, competitor strategies, and marketing opportunities."
                  delay={0}
                />
                <ServiceFeature
                  icon={BarChart}
                  title="Performance Analytics"
                  description="Comprehensive data analysis and reporting with actionable insights to optimize campaign performance."
                  delay={0.1}
                />
                <ServiceFeature
                  icon={TrendingUp}
                  title="Growth Strategy"
                  description="Long-term strategic planning for sustainable brand growth in the Zimbabwean market."
                  delay={0.2}
                />
              </>
            )}

            {activeTab === "events" && (
              <>
                <ServiceFeature
                  icon={Users}
                  title="Influencer Events"
                  description="Creator-led promotional events that generate buzz and authentic content around your brand."
                  delay={0}
                />
                <ServiceFeature
                  icon={Target}
                  title="Product Launches"
                  description="Strategic launch campaigns utilizing creator networks to maximize impact and reach."
                  delay={0.1}
                />
                <ServiceFeature
                  icon={Award}
                  title="Brand Activations"
                  description="Immersive brand experiences that drive engagement and create shareable moments."
                  delay={0.2}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-purple-600">Campaign Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach that delivers consistent results
            </p>
          </motion.div>

          <div className="space-y-16">
            <ProcessStep
              number={1}
              title="Discovery & Strategy"
              description="We start by understanding your brand goals, target audience, and key metrics. Our team then develops a tailored strategy that aligns with your objectives and budget."
              image="/discover.jpeg"
              isLast={false}
            />

            <ProcessStep
              number={2}
              title="Creator Selection"
              description="Using our proprietary data platform, we identify and select the perfect creators whose audience demographics, engagement quality, and content style align with your campaign needs."
              image="/selection.webp"
              isLast={false}
            />

            <ProcessStep
              number={3}
              title="Content Creation & Approval"
              description="Our creators develop authentic content based on detailed briefs, with a collaborative review process to ensure brand alignment while maintaining creator authenticity."
              image="/content.webp"
              isLast={false}
            />

            <ProcessStep
              number={4}
              title="Campaign Execution & Monitoring"
              description="We coordinate content publishing across platforms, actively monitor performance in real-time, and make adjustments to optimize results throughout the campaign."
              image="/campaign.png"
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Success Stories</span> That
              Drive Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how leading Zimbabwean brands achieved their marketing
              objectives through our creator-led campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
            >
              View All Case Studies
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Transparent <span className="text-purple-600">Pricing</span>{" "}
              Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible packages to match your marketing goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPlan
              title="Essential Campaign"
              price={1999}
              features={[
                "5 micro-influencers",
                "Content creation",
                "2 social platforms",
                "Campaign management",
                "Basic analytics",
                "14-day campaign duration",
              ]}
              isPopular={false}
              delay={0}
            />

            <PricingPlan
              title="Growth Campaign"
              price={3999}
              features={[
                "10 influencers (mixed tiers)",
                "Custom content creation",
                "3 social platforms",
                "Full campaign management",
                "Advanced analytics & reporting",
                "30-day campaign duration",
                "Content rights for brand channels",
              ]}
              isPopular={true}
              delay={0.1}
            />

            <PricingPlan
              title="Premium Campaign"
              price={7999}
              features={[
                "15+ influencers (all tiers)",
                "Premium content production",
                "All major platforms",
                "VIP campaign management",
                "Comprehensive analytics & insights",
                "60-day campaign duration",
                "Content rights for brand channels",
                "Event/activation option",
              ]}
              isPopular={false}
              delay={0.2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Need a custom solution for your specific marketing goals?
            </p>

            <a
              href="#contact"
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
            >
              Contact us for a tailored proposal
              <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked{" "}
              <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our marketing services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto divide-y divide-gray-200"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 w-2/3 md:w-1/2 h-full opacity-10">
          <img
            src="/assets/marketing-pattern.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Ready to amplify your brand with Zimbabwe's top creators?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-purple-100 mb-8"
            >
              Schedule a free consultation with our marketing team to discuss
              your objectives and explore how our creator network can help
              achieve your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-300 text-center"
              >
                Book a Consultation
              </a>
              <a
                href="tel:+2631234567890"
                className="px-6 py-3 bg-purple-700/30 text-white border border-purple-500/50 rounded-lg font-medium hover:bg-purple-700/50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Clock size={16} />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials/Brands Section */}
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
              Trusted by <span className="text-purple-600">Leading Brands</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join Zimbabwe's most innovative companies using our marketing
              services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {/* Replace with actual brand logos */}
            {["buyzim", "autoward", "coolsplash", "greylink",].map((index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={`/${index}.png`}
                  alt={`Brand Partner ${index}`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// This component is missing in the original code but referenced
const Palette = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-palette"
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
};

export default MarketingPage;
