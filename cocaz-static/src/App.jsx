import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './components/About/about';
import Services from './components/Services/services';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import SignUp from './components/SignUp/signup';

// Theme Context
const ThemeContext = createContext({
  theme: 'default',
  toggleTheme: () => {},
});

// Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'dark' : 'default');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme Hook
const useTheme = () => useContext(ThemeContext);

// Themed Component
const ThemedComponent = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'default' ? 'bg-[#318000] text-white' : 'bg-gray-900 text-white'}`}>
      {children}
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`${theme === 'default' ? 'bg-[#318000]' : 'bg-gray-900'} text-white py-4`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          COCAZ
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#FFD500] transition-colors duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#FFD500] transition-colors duration-300">About</Link></li>
          <li><Link to="/services" className="hover:text-[#FFD500] transition-colors duration-300">Services</Link></li>
          <li><Link to="/contact" className="hover:text-[#FFD500] transition-colors duration-300">Contact</Link></li>
          <li><Link to="/signup" className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-2 px-4 rounded-lg transition-colors duration-300">Join</Link></li>
          <li>
            <button
              onClick={toggleTheme}
              className={`${theme === 'default' ? 'bg-[#FFD500] text-[#318000]' : 'bg-gray-800 text-gray-400'} font-bold py-2 px-4 rounded-lg transition-colors duration-300`}
            >
              {theme === 'default' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// App Component
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ThemedComponent>
                <Home />
              </ThemedComponent>
            }
          />
          <Route
            path="/about"
            element={
              <ThemedComponent>
                <About />
              </ThemedComponent>
            }
          />
          <Route
            path="/services"
            element={
              <ThemedComponent>
                <Services />
              </ThemedComponent>
            }
          />
          <Route
            path="/contact"
            element={
              <ThemedComponent>
                <Contact />
              </ThemedComponent>
            }
          />
          <Route
            path="/signup"
            element={
              <ThemedComponent>
                <SignUp />
              </ThemedComponent>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;