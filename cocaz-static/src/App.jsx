import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './components/About/about';
import Services from './components/Services/services';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import SignUp from './components/SignUp/signup';
import ErrorBoundary from './components/Error/error';
import Navbar from './components/Navbar/navbar';
import { ThemeProvider } from './components/themeContext';
import { useTheme } from './components/themeContext';

const ThemedComponent = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'default' ? 'bg-[#318000] text-white' : 'bg-gray-900 text-white'} flex-grow`}>
      {children}
    </div>
  );
};

// App Component
const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
        <div className="min-h-screen flex flex-col raleway">
          <Navbar />
            <ThemedComponent>
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </div>
          </ThemedComponent>
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;