import { Award, TrendingUp, Handshake } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#FFD500]">About COCAZ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-200 mb-4">
              COCAZ is the Content Creation Association of Zimbabwe, founded in 2020 with the mission of empowering and supporting content creators across various industries. We believe in the power of creativity and its ability to inspire, educate, and entertain.
            </p>
            <p className="text-gray-200 mb-8">
              Our team of industry experts provides comprehensive services to help our members maximize their potential, from marketing and monetization strategies to professional development and networking opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="/about"
                className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-3 px-6 rounded-lg"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="text-[#FFD500] hover:text-[#DDB200] font-bold py-3 px-6"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <TrendingUp className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Rapid Growth</h3>
              <p className="text-gray-600 text-sm">
                Our members experience exponential growth in their careers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Award className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Industry Recognition</h3>
              <p className="text-gray-600 text-sm">
                Our members are celebrated for their outstanding contributions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Handshake className="text-[#318000] h-8 w-8 mb-2" />
              <h3 className="text-[#318000] font-bold mb-1">Collaborative Community</h3>
              <p className="text-gray-600 text-sm">
                We foster a supportive network of like-minded content creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;