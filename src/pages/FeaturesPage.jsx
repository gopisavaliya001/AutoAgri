import React from 'react';
import { 
  FaTractor, 
  FaRobot, 
  FaTint, 
  FaCamera, 
  FaSeedling, 
  FaWater, 
  FaPlane, 
  FaBrain, 
  FaMobileAlt,
  FaSatellite,
  FaCogs,
  FaCloud,
  FaChartLine,
  FaEye,
  FaMapMarkerAlt,
  FaMicrochip
} from 'react-icons/fa';

const FeaturesPage = () => {
  const features = [
    {
      id: 1,
      title: "Tractor Operated Sprayer",
      description: "Automated spraying system attached to tractors for precise pesticide and fertilizer application. Reduces chemical wastage and ensures even coverage across fields.",
      icon: <FaTractor className="text-2xl" />,
      benefits: ["Precision spraying", "Reduced chemical usage", "Time-efficient", "Uniform coverage"],
      image: "/tractor.jpg"
    },
    {
      id: 2,
      title: "Harvest Automation",
      description: "Intelligent harvesting machines that identify ripe crops and automate the picking process. Reduces labor costs and minimizes crop damage.",
      icon: <FaRobot className="text-2xl" />,
      benefits: ["Selective harvesting", "Reduced labor", "Minimal damage", "24/7 operation"],
      image: "/harvest.jpg"
    },
    {
      id: 3,
      title: "Drip Irrigation",
      description: "Precision water delivery system that provides water directly to plant roots. Conserves water and improves crop health through targeted irrigation.",
      icon: <FaTint className="text-2xl" />,
      benefits: ["Water conservation", "Root-level delivery", "Reduced evaporation", "Fertilizer integration"],
      image: "/drip.jpg"
    },
    {
      id: 4,
      title: "Agricultural Drones",
      description: "Advanced drone technology for aerial surveillance, crop monitoring, and targeted spraying. Provides real-time field data and high-resolution imagery.",
      icon: <FaCamera className="text-2xl" />,
      benefits: ["Aerial monitoring", "NDVI mapping", "Quick deployment", "Data analytics"],
      image: "/drone.jpg"
    },
    {
      id: 5,
      title: "Efficient Threshing",
      description: "Modern threshing equipment with automated grain separation and cleaning. Ensures high-quality grain output with minimal loss.",
      icon: <FaSeedling className="text-2xl" />,
      benefits: ["High efficiency", "Grain quality", "Low loss rate", "Automated cleaning"],
      image: "/Thresing.jpg"
    },
    {
      id: 6,
      title: "Water Sprinkler System",
      description: "Automated sprinkler systems with smart scheduling and moisture sensors. Ensures optimal water distribution across the entire field.",
      icon: <FaWater className="text-2xl" />,
      benefits: ["Even coverage", "Smart scheduling", "Rain detection", "Zone control"],
      image: "/Water Sprinkler System.jpg"
    },
    {
      id: 7,
      title: "Automated Plow The Field",
      description: "Smart plowing systems with GPS guidance for precise field preparation. Automatically adjusts depth and pattern based on soil conditions.",
      icon: <FaPlane className="text-2xl" />,
      benefits: ["GPS guidance", "Soil adaptation", "Fuel efficiency", "Consistent results"],
      image: "/plow.jpg"
    },
    {
      id: 8,
      title: "Smart Harvest",
      description: "AI-powered harvesting systems that use computer vision to identify optimal harvest times and methods for different crop types.",
      icon: <FaBrain className="text-2xl" />,
      benefits: ["AI optimization", "Yield prediction", "Quality sorting", "Data insights"],
      image: "/SmartHarvest.jpg"
    },
    {
      id: 9,
      title: "Remote Controlled Irrigation System",
      description: "IoT-based irrigation control that can be managed remotely via mobile apps. Monitors soil conditions and adjusts watering automatically.",
      icon: <FaMobileAlt className="text-2xl" />,
      benefits: ["Remote control", "Real-time monitoring", "Automated adjustment", "Mobile access"],
      image: "/Remote Controlled Irrigation System.jpg"
    }
  ];

  const technologies = [
    { name: "IoT Sensors", icon: <FaSatellite className="text-3xl" /> },
    { name: "AI & Machine Learning", icon: <FaBrain className="text-3xl" /> },
    { name: "GPS Technology", icon: <FaMapMarkerAlt className="text-3xl" /> },
    { name: "Cloud Computing", icon: <FaCloud className="text-3xl" /> },
    { name: "Mobile Applications", icon: <FaMobileAlt className="text-3xl" /> },
    { name: "Data Analytics", icon: <FaChartLine className="text-3xl" /> },
    { name: "Automation Control", icon: <FaCogs className="text-3xl" /> },
    { name: "Remote Monitoring", icon: <FaEye className="text-3xl" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-indigo-50 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Advanced Farming Features</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive suite of automated farming solutions designed to 
            increase productivity, reduce costs, and promote sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Feature Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white p-2 rounded-lg">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content - This section will have consistent height */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title and Description */}
                  <div className="mb-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Benefits Section - Fixed height container */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <span 
                          key={idx}
                          className="bg-green-50 text-[#347433] text-sm px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button - Always at the bottom */}
                  <div className="mt-auto">
                    <button className="w-full bg-[#347433] text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Supported Technologies</h2>
            <p className="text-lg text-gray-600">Integrating cutting-edge technologies for smart farming</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-200 rounded-lg hover:bg-green-50 transition duration-300">
                <div className="flex justify-center mb-3 text-green-600">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#347433] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Farm?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with our smart farming solutions and transform your agricultural operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white border border-white text-black px-8 py-3 rounded-lg hover:bg-gray-300 transition duration-300 font-semibold">
              Request Demo
            </button>
             <button className=" border border-white text-white px-8 py-3 rounded-lg hover:bg-gray-300 transition duration-300 font-semibold">
               Contact Our Team
            </button>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">50%</div>
              <div className="text-gray-300">Water Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">30%</div>
              <div className="text-gray-300">Labor Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">25%</div>
              <div className="text-gray-300">Yield Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;