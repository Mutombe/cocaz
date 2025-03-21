import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Youtube, 
  Mail, Phone, MapPin 
} from 'lucide-react';

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Press', href: '/press' },
    ],
    creators: [
      { name: 'Join as Creator', href: '/join' },
      { name: 'Creator Guidelines', href: '/guidelines' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Resources', href: '/resources' },
    ],
    brands: [
      { name: 'Partner with Us', href: '/partner' },
      { name: 'Advertising', href: '/advertising' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Pricing', href: '/pricing' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                COCAZ
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering Zimbabwe's content creators through collaboration, 
              education, and innovative partnerships.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">contact@cocaz.co.zw</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">+263 78 223 5693</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">Harare, Zimbabwe</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Creators</h3>
            <ul className="space-y-3">
              {navigation.creators.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-3">
              {navigation.brands.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Content Creators Association of Zimbabwe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;