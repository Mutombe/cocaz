import { BadgeDollarSign, GraduationCap, Waypoints } from 'lucide-react';
const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#FFD500]">Our Services for Creators</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <BadgeDollarSign className="text-[#318000] h-10 w-10 mb-4" />
            <h3 className="text-[#318000] font-bold mb-2">Growth</h3>
            <p className="text-gray-600 text-sm text-center">
              We help our members maximize their earning potential through strategic monetization tactics.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <BadgeDollarSign className="text-[#318000] h-10 w-10 mb-4" />
            <h3 className="text-[#318000] font-bold mb-2">Monetization</h3>
            <p className="text-gray-600 text-sm text-center">
              We help our members maximize their earning potential through strategic monetization tactics.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <GraduationCap className="text-[#318000] h-10 w-10 mb-4" />
            <h3 className="text-[#318000] font-bold mb-2">Education</h3>
            <p className="text-gray-600 text-sm text-center">
              Our educational workshops and mentorship programs empower our members to develop their skills.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Waypoints className="text-[#318000] h-10 w-10 mb-4" />
            <h3 className="text-[#318000] font-bold mb-2">Networking</h3>
            <p className="text-gray-600 text-sm text-center">
              We connect our members with industry professionals and potential collaborators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;