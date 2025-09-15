import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar/navbar1";
import HomePage from "./components/Home/home1";
import { motion, AnimatePresence } from "framer-motion";
import { BrandPartnersSection } from "./components/Influencers/creators";
import CreatorCategoriesSection from "./components/Influencers/creators";
import AboutPage from "./components/About/about1";
import Footer from "./components/footer/footer1";
import ServicesPage from "./components/Services/services1";
import ContentCreationPage from "./components/Services/content";
import MarketingPage from "./components/Services/marketing";
import NetworkingServicesPage from "./components/Services/networking";
import ContactPage from "./components/Contact/contact1";
import EventsPage from "./components/Events/events";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/brands"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <BrandPartnersSection />
                </motion.div>
              }
            />
            <Route
              path="/creators"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <CreatorCategoriesSection />
                </motion.div>
              }
            />
            <Route
              path="/events"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <EventsPage />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ServicesPage />
                </motion.div>
              }
            />
            <Route
              path="/services/content-creation"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContentCreationPage />
                </motion.div>
              }
            />
            <Route
              path="/services/marketing"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <MarketingPage />
                </motion.div>
              }
            />
            <Route
              path="/services/networking"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <NetworkingServicesPage />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
            {/* Add more routes as needed */}
          </Routes>
        </AnimatePresence>
        <Footer />
        <Toaster position="top-center" expand={true} richColors />
      </div>
    </Router>
  );
}

export default App;
