import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../themeContext';
import { Calendar, Clock, MapPin, ArrowRight, ExternalLink, Filter } from 'lucide-react';

const EventCard = ({ title, date, time, location, description, image, link, isPast }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.div
      className={`${currentTheme.card} rounded-xl shadow-xl backdrop-blur-sm overflow-hidden`}
      whileHover={{ scale: 1.02, translateY: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative h-48">
        <img
          src={image || "/api/placeholder/400/200"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`${isPast ? 'bg-gray-600' : currentTheme.button} ${currentTheme.buttonText} px-3 py-1 rounded-full text-sm font-medium`}>
            {isPast ? 'Past Event' : 'Upcoming'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold ${currentTheme.accent} mb-3`}>
          {title}
        </h3>
        
        <div className={`${currentTheme.text} space-y-2 mb-4`}>
          <div className="flex items-center space-x-2">
            <Calendar size={16} className={currentTheme.accent} />
            <span className="text-sm">{date}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock size={16} className={currentTheme.accent} />
            <span className="text-sm">{time}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin size={16} className={currentTheme.accent} />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <p className={`${currentTheme.text} text-sm mb-6 line-clamp-3`}>
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.button} ${currentTheme.buttonText} px-4 py-2 rounded-full flex items-center space-x-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{isPast ? 'View Recap' : 'Learn More'}</span>
            <ArrowRight size={16} />
          </motion.a>
          
          {!isPast && (
            <motion.a
              href={`${link}/register`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.secondary} ${currentTheme.buttonText} px-4 py-2 rounded-full flex items-center space-x-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Register</span>
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ active, onClick, children }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.button
      onClick={onClick}
      className={`${
        active ? currentTheme.button : 'bg-gray-700'
      } ${active ? currentTheme.buttonText : 'text-white'} px-4 py-2 rounded-full text-sm font-medium`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const EventsPage = () => {
  const { currentTheme } = useTheme();
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past'
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const events = [
    {
      title: "COCAZ Creator Bootcamp 2024",
      date: "2023-12-15",
      time: "09:00 AM - 5:00 PM",
      location: "Harare International Conference Centre",
      description: "Join us for our annual creator summit featuring workshops, networking, and exclusive insights into the future of digital content creation in Africa.",
      category: "conference",
      link: "https://cocaz.org.zw",
      image: "/assets/camp2.jpg"
    },
    {
      title: "Content Creation Masterclass",
      date: "2024-08-20",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      description: "Learn advanced content creation techniques from industry experts. Perfect for both beginners and experienced creators.",
      category: "workshop",
      link: "https://cocaz.org.zw/",
      image: "/assets/logo.jpeg"
    },
    {
      title: "COCAZ Awards 2023",
      date: "2023-11-30",
      time: "7:00 PM - 11:00 PM",
      location: "Rainbow Towers, Harare",
      description: "Celebrating the achievements of top African content creators and influencers in 2023.",
      category: "awards",
      link: "https://cocaz.org.zw",
      image: "/assets/logo3.jpeg"
    },
    {
      title: "Women’s Perspectives Event",
      date: "2024-11-28",
      time: "6:00 PM - 9:00 PM",
      location: "Harare Gardens",
      description: "The Women’s Perspectives Event, organized by the Cinema Society of Zimbabwe in collaboration with the Content Creators Association of Zimbabwe (COCAZ)",
      category: "networking",
      link: "https://events.cocaz.com/networking-night",
      image: "/women.jpeg"
    }
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div 
      className="py-20"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          variants={pageVariants}
        >
          <motion.h2
            className={`text-4xl font-bold ${currentTheme.accent} mb-4`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            COCAZ Events
          </motion.h2>
          <motion.p 
            className={`${currentTheme.text} text-xl max-w-2xl mx-auto mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover and participate in events that shape the future of content creation
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter size={16} className={currentTheme.accent} />
              <span className={`${currentTheme.text} text-sm`}>Time:</span>
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
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={16} className={currentTheme.accent} />
              <span className={`${currentTheme.text} text-sm`}>Category:</span>
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

        <AnimatePresence mode="wait">
          <motion.div 
            key={`${filter}-${categoryFilter}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                <EventCard 
                  {...event} 
                  isPast={new Date(event.date) < currentDate}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <p className={`${currentTheme.text} text-lg`}>
              No events found matching your criteria
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default EventsPage;