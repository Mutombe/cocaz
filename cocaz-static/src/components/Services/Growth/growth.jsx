import { motion } from 'framer-motion';
import { BarChart2, Users, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GrowthMetric = ({ icon: Icon, title, value, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 mb-6"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="text-[#318000] h-8 w-8 mr-3" />
      <h3 className="text-xl font-semibold text-black">{title}</h3>
    </div>
    <p className="text-3xl font-bold mb-2 text-black">{value}</p>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const growthData = [
  { year: 2020, creators: 50, revenue: 10000 },
  { year: 2021, creators: 150, revenue: 30000 },
  { year: 2022, creators: 300, revenue: 75000 },
  { year: 2023, creators: 500, revenue: 150000 },
  { year: 2024, creators: 750, revenue: 250000 },
];

const ImpressiveGrowth = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Impressive Growth</h1>
      <p className="mb-8">Since our inception, COCAZ has experienced remarkable growth, both in terms of our creator network and the success we've helped our members achieve. Here's a snapshot of our journey:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <GrowthMetric 
          icon={Users}
          title="Creator Network"
          value="750+"
          description="Active content creators managed by COCAZ"
        />
        <GrowthMetric 
          icon={TrendingUp}
          title="Average Creator Growth"
          value="200%"
          description="Annual increase in follower count for our creators"
        />
        <GrowthMetric 
          icon={BarChart2}
          title="Content Reach"
          value="1M+"
          description="Monthly views across all platforms"
        />
        <GrowthMetric 
          icon={DollarSign}
          title="Creator Earnings"
          value="$250K+"
          description="Total earnings by our creators in 2024"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Our Growth Journey</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={growthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="creators" stroke="#318000" name="Number of Creators" />
          <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#FFD500" name="Total Revenue ($)" />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="text-2xl font-semibold mt-12 mb-4">What Our Growth Means for You</h2>
      <p className="mb-4">Our impressive growth is a testament to the effectiveness of our strategies and the dedication of our team. For content creators, this means:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Access to a larger network of potential collaborators</li>
        <li>More opportunities for brand partnerships and sponsorships</li>
        <li>Increased visibility in a competitive market</li>
        <li>Better resources and support for your content creation journey</li>
      </ul>

      <p className="mt-8 font-semibold">Join COCAZ today and be part of our exciting growth story. Let's take your content creation career to new heights!</p>
    </motion.div>
  );
};

export default ImpressiveGrowth;