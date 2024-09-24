import { Link } from 'react-router-dom';
import { Camera, CalendarClock, UsersRound, Star, ThumbsUp, Instagram, Facebook, Twitter, Award, UserCheck, BarChart } from 'lucide-react';
const Home = () => {
  return (
    <div className="bg-[#318000] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Welcome to COCAZ
            </h1>
            <p className="text-gray-200 mb-8">
              COCAZ is the Content Creation Association of Zimbabwe, dedicated to empowering and supporting content creators across various industries.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/signup"
                className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-3 px-6 rounded-lg"
              >
                Join Now
              </Link>
              <Link
                to="/about"
                className="text-[#FFD500] hover:text-[#DDB200] font-bold py-3 px-6"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Camera className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Media Production</h3>
              <p className="text-gray-600 text-sm">
                Elevate your content with our media production services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <CalendarClock className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Event Management</h3>
              <p className="text-gray-600 text-sm">
                Let us handle the logistics of your events.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <UserCheck className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Talent Management</h3>
              <p className="text-gray-600 text-sm">
                We empower and support content creators.
              </p>
            </div>
          </div>
        </div>

        {/* Service History */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Service History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Star className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">10+ Years of Experience</h3>
              <p className="text-gray-600 text-sm">
                COCAZ has been empowering content creators in Zimbabwe since 2010.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <ThumbsUp className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Hundreds of Satisfied Clients</h3>
              <p className="text-gray-600 text-sm">
                Our members have experienced tremendous growth and success.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src="/api/placeholder/400/320" alt="COCAZ Project" className="rounded-lg mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Successful Projects</h3>
              <p className="text-gray-600 text-sm">
                We've collaborated on numerous award-winning projects with our members.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements & Accolades */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Award className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Industry Awards</h3>
              <p className="text-gray-600 text-sm">
                COCAZ has been recognized for its outstanding contribution to the content creation industry.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <UserCheck className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Trusted by Creators</h3>
              <p className="text-gray-600 text-sm">
                Our members trust us to guide and support their content creation journeys.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <BarChart className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Impressive Growth</h3>
              <p className="text-gray-600 text-sm">
                We've helped our members achieve remarkable growth in their careers and businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/cocaz_official/" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-[#FFD500] h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/cocaz.official" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-[#FFD500] h-8 w-8" />
            </a>
            <a href="https://twitter.com/cocaz_official" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-[#FFD500] h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;