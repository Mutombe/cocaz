import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './components/About/about';
import Services from './components/Services/services';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import SignUp from './components/SignUp/signup';
import Experience from './components/Services/Experience/experience';
import MediaProduction from './components/Services/MediaProduction/mediaProduction';
import EventManagement from './components/Services/EventManagement/eventManagement';
import IndustryAwards from './components/Services/IndustryAwards/industryAwards';
import TalentManagement from './components/Services/TalentManagement/talentManagement';
import SatisfiedClients from './components/Services/SatisfiedClients/saticifiedClients';
import ImpressiveGrowth from './components/Services/Growth/growth';
import TrustedByCreators from './components/Services/TrustedByCreators/trustedByCreators';
import SuccessfulProjects from './components/Services/SuccessfulProjects/successfulProjects';
import ErrorBoundary from './components/Error/error';
import Navbar from './components/Navbar/navbar';
import { ThemeProvider } from './components/themeContext';
import { useTheme } from './components/themeContext';
import Gallery from './components/Gallery/gallery';


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
                <Route path="/services/media-production" element={<MediaProduction />} />
                <Route path="/services/event-management" element={<EventManagement />} />
                <Route path="/services/talent-management" element={<TalentManagement />} />
                <Route path="/history/4+-years-of-experience" element={<Experience />} />
                <Route path="history/hundreds-of-satisfied-clients" element={<SatisfiedClients />} />
                <Route path="/achievements/impressive-growth" element={<ImpressiveGrowth />} />
                <Route path="achievements/industry-awards" element={<IndustryAwards />} />
                <Route path="achievements/trusted-by-creators" element={<TrustedByCreators />} />
                <Route path="/history/successful-projects" element={<SuccessfulProjects />} />
                <Route path="/history/Gallery" element={<Gallery />} />
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