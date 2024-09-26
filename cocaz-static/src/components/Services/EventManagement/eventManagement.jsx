import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { ChevronDownIcon, Mic, Calendar, Briefcase, UsersRound, Music, Utensils, Camera, Users, Clock } from 'lucide-react';

const EventManagement = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedService, setExpandedService] = useState(null);

  const tabs = ['Overview', 'MC Services', 'Event Types', 'Planning Services'];

  const services = [
    { name: 'Venue selection and decoration', description: 'We help you find and decorate the perfect venue for your event.', icon: Calendar },
    { name: 'Entertainment booking', description: 'We book top-notch entertainment to keep your guests engaged.', icon: Music },
    { name: 'Catering coordination', description: 'We coordinate with the best caterers to provide delicious food for your event.', icon: Utensils },
    { name: 'Audio-visual setup', description: 'We ensure your event has the best sound and visual equipment.', icon: Camera },
    { name: 'Guest list management', description: 'We help you manage your guest list efficiently.', icon: Users },
    { name: 'On-site event coordination', description: 'We provide on-site coordination to ensure your event runs smoothly.', icon: Clock },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#318000] dark:text-[#5fd75f]">Event Management Services</h1>
      
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#318000]/20 dark:bg-[#5fd75f]/20 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-bold leading-5
                 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#318000] dark:ring-offset-[#5fd75f] focus:outline-none focus:ring-2
                 ${selected ? 'bg-white dark:bg-gray-800 text-[#318000] dark:text-[#5fd75f] shadow' : 'text-gray-700 dark:text-gray-300 hover:bg-white/[0.12] dark:hover:bg-gray-800/[0.12] hover:text-[#318000] dark:hover:text-[#5fd75f]'} `
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white dark:bg-gray-800 p-3">
            <p className="text-gray-700 dark:text-gray-300">COCAZ offers top-tier event management services, leveraging our network of talented content creators to make your special occasions truly unforgettable.</p>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white dark:bg-gray-800 p-3">
            <h2 className="text-2xl font-semibold mb-4 text-[#318000] dark:text-[#5fd75f]">Master of Ceremonies (MC) Services</h2>
            <p className="text-gray-700 dark:text-gray-300">Our roster includes some of Zimbabwe's most skilled and charismatic MCs. These content creators have honed their craft through years of engaging with audiences both online and in person. They bring energy, wit, and professionalism to every event they host.</p>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white dark:bg-gray-800 p-3">
            <h2 className="text-2xl font-semibold mb-4 text-[#318000] dark:text-[#5fd75f]">Events We Specialize In</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center"><UsersRound className="w-5 h-5 mr-2 text-[#318000] dark:text-[#5fd75f]" /> Weddings: Our MCs ensure your special day flows smoothly, keeping guests entertained and the atmosphere joyful.</li>
              <li className="flex items-center"><Briefcase className="w-5 h-5 mr-2 text-[#318000] dark:text-[#5fd75f]" /> Corporate Events: From product launches to annual galas, we help maintain a professional yet engaging atmosphere.</li>
              <li className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-[#318000] dark:text-[#5fd75f]" /> Get-togethers and Parties: Whether it's a birthday, anniversary, or just a friendly gathering, our MCs know how to keep the energy high and the fun flowing.</li>
              <li className="flex items-center"><Mic className="w-5 h-5 mr-2 text-[#318000] dark:text-[#5fd75f]" /> Conferences and Seminars: We help maintain audience engagement throughout long days of presentations and networking.</li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white dark:bg-gray-800 p-3">
            <h2 className="text-2xl font-semibold mb-4 text-[#318000] dark:text-[#5fd75f]">Full-Service Event Planning</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Beyond providing MCs, COCAZ offers comprehensive event planning services. We can help with:</p>
            <motion.ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                  >
                    <span className="font-medium flex items-center">
                      <service.icon className="w-5 h-5 mr-2 text-[#318000] dark:text-[#5fd75f]" />
                      {service.name}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 transform transition-transform text-[#318000] dark:text-[#5fd75f] ${
                        expandedService === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-2 bg-white dark:bg-gray-800"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      
      <motion.p 
        className="mt-8 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Let COCAZ take the stress out of your event planning. With our network of talented content creators and our experience in managing events of all sizes, we'll ensure your gathering is a resounding success. Contact us today to start planning your next unforgettable event!
      </motion.p>
    </motion.div>
  );
};

export default EventManagement;