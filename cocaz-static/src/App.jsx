import { BrowserRouter as Router, Link, Route, Routes,useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/footer/footer";
import Services from "./components/Services/services";
import Contact from "./components/Contact/contact";
import SignUp from "./components/SignUp/signup";
import Experience from "./components/Services/Experience/experience";
import MediaProduction from "./components/Services/MediaProduction/mediaProduction";
import EventManagement from "./components/Services/EventManagement/eventManagement";
import IndustryAwards from "./components/Services/IndustryAwards/industryAwards";
import TalentManagement from "./components/Services/TalentManagement/talentManagement";
import SatisfiedClients from "./components/Services/SatisfiedClients/saticifiedClients";
import ImpressiveGrowth from "./components/Services/Growth/growth";
import TrustedByCreators from "./components/Services/TrustedByCreators/trustedByCreators";
import SuccessfulProjects from "./components/Services/SuccessfulProjects/successfulProjects";
import { ThemedComponent } from "./components/themeContext";
import ErrorBoundary from "./components/Error/error";
import Navbar from "./components/Navbar/navbar";
import { ThemeProvider } from "./components/themeContext";
import { useTheme } from "./components/themeContext";
import NotFound from "./components/NotFound/notFound";
import Loading from "./components/Loading/loading";
import { Suspense, lazy, useEffect } from "react";

const Home = lazy(() => import("./components/Home/home"));
const About = lazy(() => import("./components/About/about"));
const Gallery = lazy(() => import("./components/Gallery/gallery"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
// App Component

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <div className="relative min-h-screen flex flex-col raleway overflow-hidden">
            <ScrollToTop />
            <Navbar />
            <ThemedComponent>
              <AnimatePresence mode="wait">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center min-h-screen">
                      <Loading />
                    </div>
                  }
                >
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route
                        path="/services/media-production"
                        element={<MediaProduction />}
                      />
                      <Route
                        path="/services/event-management"
                        element={<EventManagement />}
                      />
                      <Route
                        path="/services/talent-management"
                        element={<TalentManagement />}
                      />
                      <Route
                        path="/history/4+-years-of-experience"
                        element={<Experience />}
                      />
                      <Route
                        path="history/hundreds-of-satisfied-clients"
                        element={<SatisfiedClients />}
                      />
                      <Route
                        path="/achievements/impressive-growth"
                        element={<ImpressiveGrowth />}
                      />
                      <Route
                        path="achievements/industry-awards"
                        element={<IndustryAwards />}
                      />
                      <Route
                        path="achievements/trusted-by-creators"
                        element={<TrustedByCreators />}
                      />
                      <Route
                        path="/history/successful-projects"
                        element={<SuccessfulProjects />}
                      />
                      <Route path="/history/Gallery" element={<Gallery />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </PageTransition>
                </Suspense>
              </AnimatePresence>
            </ThemedComponent>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
