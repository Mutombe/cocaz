import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, currentTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 ${currentTheme.nav} text-white py-4 shadow-lg mb-10 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className={`text-2xl font-bold ${currentTheme.accent}`}>
              COCAZ
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" active={location.pathname === "/"} theme={currentTheme}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === "/about"} theme={currentTheme}>About</NavLink>
            <NavLink to="/services" active={location.pathname === "/services"} theme={currentTheme}>Services</NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"} theme={currentTheme}>Contact</NavLink>
            <NavLink to="/history/Gallery" active={location.pathname === "/history/Gallery"} theme={currentTheme}>Gallery</NavLink>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/signup" 
                className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300`}
              >
                Join
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300`}
            >
              {theme === 'default' ? 'Switch Theme' : `Theme: ${theme}`}
            </motion.button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${currentTheme.text} focus:outline-none`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4"
        >
          <div className={`flex flex-col space-y-4 px-4 ${currentTheme.card} rounded-b-lg pb-4`}>
            <MobileNavLink to="/" onClick={toggleMenu} active={location.pathname === "/"} theme={currentTheme}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu} active={location.pathname === "/about"} theme={currentTheme}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu} active={location.pathname === "/services"} theme={currentTheme}>Services</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu} active={location.pathname === "/contact"} theme={currentTheme}>Contact</MobileNavLink>
            <MobileNavLink to="/history/Gallery" onClick={toggleMenu} active={location.pathname === "/history/Gallery"} theme={currentTheme}>Gallery</MobileNavLink>
            <Link 
              to="/signup" 
              onClick={toggleMenu}
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 text-center`}
            >
              Join
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 w-full`}
            >
              {theme === 'default' ? 'Switch Theme' : `Theme: ${theme}`}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ to, active, theme, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={to} 
      className={`relative transition-all duration-300 ${
        active 
          ? `${theme.accent} font-bold` 
          : `${theme.text} hover:${theme.accent.split(' ')[1]}`
      }`}
    >
      <span className="relative z-10 px-3 py-2">{children}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className={`absolute inset-0 ${theme.card} rounded-lg border-2 ${theme.accent.replace('text', 'border')} shadow-lg`}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          style={{paddingTop: "2px"}}
        />
      )}
    </Link>
  </motion.div>
);

const MobileNavLink = ({ to, onClick, active, theme, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      onClick={onClick}
      className={`relative block transition-all duration-300 ${
        active 
          ? `${theme.accent} font-bold rounded-full px-4 py-2 ${theme.card} border-2 ${theme.accent.replace('text', 'border')} shadow-lg` 
          : `${theme.text} hover:${theme.accent.split(' ')[1]} px-4 py-2`
      }`}
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;