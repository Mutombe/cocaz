import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon,
  Home,
  Users,
  Building2,
  Briefcase,
  Info,
  Phone,
  ExternalLink
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Creators', path: '/creators', icon: Users },
    { name: 'Brands', path: '/brands', icon: Building2 },
    { 
      name: 'Services', 
      path: '/services', 
      icon: Briefcase,
      subItems: ['Content-Creation', 'Marketing', 'Networking'] 
    },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center gap-3 ">
            <div className="w-auto h-12 flex items-center">
                {/* Replace the next line with your actual logo */}
                <img 
                  src="/logo2.png" 
                  alt="COCAZ Logo" 
                  className="h-full w-auto object-contain rounded-sm"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-purple-50 ${
                    location.pathname === item.path ? 'text-purple-600 bg-purple-50' : ''
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.subItems && (
                  <div className="absolute hidden group-hover:block w-48 bg-white shadow-xl rounded-xl mt-2 overflow-hidden border border-gray-100">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`${item.path}/${subItem.toLowerCase()}`}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-b border-gray-50 last:border-none"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300 text-gray-700 hover:text-purple-600"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
            >
              <span className="text-sm font-medium">Menu</span>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-xl shadow-lg border border-gray-100 mb-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium ${
                        location.pathname === item.path
                          ? 'text-purple-600 bg-purple-50'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="pl-12 space-y-1 border-l-2 border-purple-100 ml-6 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`${item.path}/${subItem.toLowerCase()}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                            onClick={() => setIsOpen(false)}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

