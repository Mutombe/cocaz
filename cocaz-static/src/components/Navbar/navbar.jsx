import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../themeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${theme === 'default' ? 'bg-[#318000]' : 'bg-gray-900'} text-white py-4`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            COCAZ
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/signup" className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-2 px-4 rounded-lg transition-colors duration-300">Join</Link>
            <button
              onClick={toggleTheme}
              className={`${theme === 'default' ? 'bg-[#FFD500] text-[#318000]' : 'bg-gray-800 text-gray-400'} font-bold py-2 px-4 rounded-lg transition-colors duration-300`}
            >
              {theme === 'default' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
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
          <div className="flex flex-col space-y-4 px-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Link 
              to="/signup" 
              onClick={toggleMenu}
              className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-center"
            >
              Join
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className={`${theme === 'default' ? 'bg-[#FFD500] text-[#318000]' : 'bg-gray-800 text-gray-400'} font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full`}
            >
              {theme === 'default' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="hover:text-[#FFD500] transition-colors duration-300">
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="hover:text-[#FFD500] transition-colors duration-300 block"
  >
    {children}
  </Link>
);

export default Navbar;