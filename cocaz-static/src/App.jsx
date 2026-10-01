import { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has rendered before scrolling to its section
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <ScrollManager />
    <div className="relative flex min-h-screen flex-col">
      <Nav />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/terms" element={<Terms />} />

          {/* Addresses from the previous site, kept alive for old links */}
          <Route path="/signup" element={<Navigate to="/join" replace />} />
          <Route path="/leaders" element={<Navigate to="/about#leadership" replace />} />
          <Route path="/history/Gallery" element={<Navigate to="/gallery" replace />} />
          <Route path="/history/*" element={<Navigate to="/about" replace />} />
          <Route path="/achievements/*" element={<Navigate to="/services" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
