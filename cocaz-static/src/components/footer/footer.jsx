import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../themeContext';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const { currentTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${currentTheme.nav} pt-12 pb-6`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-4`}>COCAZ</h3>
            <p className={`${currentTheme.text} mb-4`}>
              Empowering creators and managing talent across Zimbabwe. Building bridges between artists and opportunities.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://youtube.com" icon={<Youtube size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold ${currentTheme.accent} mb-4`}>Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Our Services</FooterLink>
              <FooterLink to="/history/Gallery">Gallery</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/signup">Join Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-semibold ${currentTheme.accent} mb-4`}>Our Services</h4>
            <ul className="space-y-2">
              <FooterLink to="/services/media-production">Media Production</FooterLink>
              <FooterLink to="/services/event-management">Event Management</FooterLink>
              <FooterLink to="/services/talent-management">Talent Management</FooterLink>
              <FooterLink to="/achievements/industry-awards">Industry Awards</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold ${currentTheme.accent} mb-4`}>Contact Us</h4>
            <ul className="space-y-3">
              <li className={`flex items-center space-x-2 ${currentTheme.text}`}>
                <MapPin size={18} />
                <span>123 Main Street, Harare, Zimbabwe</span>
              </li>
              <li className={`flex items-center space-x-2 ${currentTheme.text}`}>
                <Phone size={18} />
                <a href="tel:+263775551234" className="hover:underline">+263 77 555 1234</a>
              </li>
              <li className={`flex items-center space-x-2 ${currentTheme.text}`}>
                <Mail size={18} />
                <a href="mailto:info@cocaz.co.zw" className="hover:underline">info@cocaz.co.zw</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={`${currentTheme.card} rounded-lg p-6 mb-8`}>
          <div className="max-w-xl mx-auto text-center">
            <h4 className={`text-lg font-semibold ${currentTheme.accent} mb-2`}>
              Subscribe to Our Newsletter
            </h4>
            <p className={`${currentTheme.text} mb-4`}>
              Stay updated with our latest news and updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/10 text-white"
              />
              <button
                className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`${currentTheme.text} text-sm`}>
              <p className="flex items-center justify-center space-x-1">
                <span>© 2024 COCAZ.             Developed </span>
                <span>by <a href="https://zettabyte.co.zw" target="_blank" rel="noopener noreferrer">
          <strong style={{textDecoration: "underline"}}>Zettabyte</strong></a></span>
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy-policy" className={`${currentTheme.text} hover:underline`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`${currentTheme.text} hover:underline`}>
                Terms of Service
              </Link>
              <Link to="/cookies" className={`${currentTheme.text} hover:underline`}>
                Cookie Policy
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className={`${currentTheme.button} ${currentTheme.buttonText} p-2 rounded-full hover:scale-110 transition-transform duration-300`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ href, icon }) => {
  const { currentTheme } = useTheme();
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${currentTheme.button} ${currentTheme.buttonText} p-2 rounded-full hover:scale-110 transition-transform duration-300`}
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ to, children }) => {
  const { currentTheme } = useTheme();
  
  return (
    <li>
      <Link
        to={to}
        className={`${currentTheme.text} hover:${currentTheme.accent.split(' ')[1]} transition-colors duration-300`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;