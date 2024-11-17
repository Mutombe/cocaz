import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../themeContext';

const Navbar = () => {
  const { theme, currentTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 ${currentTheme.nav} text-white py-4 shadow-lg`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className={`text-2xl font-bold ${currentTheme.accent}`}>
            COCAZ
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" active={location.pathname === "/"} theme={currentTheme}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === "/about"} theme={currentTheme}>About</NavLink>
            <NavLink to="/services" active={location.pathname === "/services"} theme={currentTheme}>Services</NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"} theme={currentTheme}>Contact</NavLink>
            <NavLink to="/history/Gallery" active={location.pathname === "/history/Gallery"} theme={currentTheme}>Gallery</NavLink>
            <Link 
              to="/signup" 
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-lg transition-colors duration-300`}
            >
              Join
            </Link>
            <button
              onClick={toggleTheme}
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-lg transition-colors duration-300`}
            >
              {theme === 'default' ? 'Switch Theme' : `Theme: ${theme}`}
            </button>
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
        <div className="md:hidden mt-4">
          <div className={`flex flex-col space-y-4 px-4 ${currentTheme.nav} rounded-b-lg pb-4`}>
            <MobileNavLink to="/" onClick={toggleMenu} active={location.pathname === "/"} theme={currentTheme}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu} active={location.pathname === "/about"} theme={currentTheme}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu} active={location.pathname === "/services"} theme={currentTheme}>Services</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu} active={location.pathname === "/contact"} theme={currentTheme}>Contact</MobileNavLink>
            <MobileNavLink to="/history/Gallery" onClick={toggleMenu} active={location.pathname === "/history/Gallery"} theme={currentTheme}>Gallery</MobileNavLink>
            <Link 
              to="/signup" 
              onClick={toggleMenu}
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-center`}
            >
              Join
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className={`${currentTheme.button} ${currentTheme.buttonText} font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full`}
            >
              {theme === 'default' ? 'Switch Theme' : `Theme: ${theme}`}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, theme, children }) => (
  <Link 
    to={to} 
    className={`transition-colors duration-300 ${
      active 
        ? theme.accent + ' font-bold' 
        : theme.text + ' hover:' + theme.accent.split(' ')[1]
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, active, theme, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`transition-colors duration-300 block ${
      active 
        ? theme.accent + ' font-bold' 
        : theme.text + ' hover:' + theme.accent.split(' ')[1]
    }`}
  >
    {children}
  </Link>
);

export default Navbar;