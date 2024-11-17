import React, { createContext, useState, useContext, useEffect } from 'react';
import { motion } from "framer-motion";

const themes = {
  default: {
    primary: 'bg-gradient-to-br from-green-700 via-green-800 to-green-900',
    secondary: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
    text: 'text-white',
    accent: 'text-yellow-400',
    card: 'bg-gradient-to-br from-green-800/50 to-green-900/50 backdrop-blur-sm',
    button: 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600',
    buttonText: 'text-green-900',
    nav: 'bg-gradient-to-r from-green-900 via-green-800 to-green-900',
  },
  sunset: {
    primary: 'bg-gradient-to-br from-orange-500 via-red-500 to-purple-800',
    secondary: 'bg-gradient-to-r from-yellow-300 to-orange-400',
    text: 'text-white',
    accent: 'text-yellow-300',
    card: 'bg-gradient-to-br from-orange-600/50 to-red-700/50 backdrop-blur-sm',
    button: 'bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-yellow-400 hover:to-orange-500',
    buttonText: 'text-red-900',
    nav: 'bg-gradient-to-r from-purple-900 via-red-800 to-orange-900',
  },
  forest: {
    primary: 'bg-gradient-to-br from-emerald-600 via-green-700 to-teal-900',
    secondary: 'bg-gradient-to-r from-lime-300 to-emerald-400',
    text: 'text-white',
    accent: 'text-lime-300',
    card: 'bg-gradient-to-br from-emerald-700/50 to-teal-800/50 backdrop-blur-sm',
    button: 'bg-gradient-to-r from-lime-300 to-emerald-400 hover:from-lime-400 hover:to-emerald-500',
    buttonText: 'text-emerald-900',
    nav: 'bg-gradient-to-r from-teal-900 via-green-800 to-emerald-900',
  }
};

// Initial theme state with default values
const initialThemeState = {
  theme: 'default',
  currentTheme: themes.default,
  toggleTheme: () => {}
};

const ThemeContext = createContext(initialThemeState);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme && themes[savedTheme] ? savedTheme : 'default';
    } catch {
      return 'default';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const themeOrder = ['default', 'sunset', 'ocean', 'forest'];
      const currentIndex = themeOrder.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themeOrder.length;
      return themeOrder[nextIndex];
    });
  };

  const value = {
    theme,
    currentTheme: themes[theme] || themes.default, // Fallback to default theme if current theme is invalid
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemedComponent with error handling
const ThemedComponent = ({ children }) => {
  const { currentTheme } = useTheme();
  const themeClass = currentTheme?.primary || themes.default.primary;

  return (
    <motion.div
      className={`${themeClass} min-h-screen transition-colors duration-500 ease-in-out`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export { ThemedComponent, themes };