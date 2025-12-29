import React from 'react';
import { 
  FaSeedling, 
  FaTint, 
  FaBug, 
  FaChartLine, 
  FaMobileAlt, 
  FaUserTie,
  FaRobot,
  FaTools,
  FaCamera,
  FaSolarPanel,
  FaShieldAlt,
  FaGraduationCap
} from 'react-icons/fa';
import { 
  WiDaySunny, 
  WiRain 
} from 'react-icons/wi';
import { 
  BsClipboardData, 
  BsPhone 
} from 'react-icons/bs';
import { 
  MdAnalytics, 
  MdSupportAgent 
} from 'react-icons/md';
import { 
  IoLeafOutline 
} from 'react-icons/io5';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: <FaSeedling className="text-4xl text-green-600" />,
      title: 'Real-Time Field Monitoring',
      description: '24/7 field monitoring with advanced IoT sensors and surveillance systems',
      features: ['Soil moisture & temperature tracking', 'Weather condition monitoring', 'Crop health surveillance', 'Remote mobile access']
    },
    {
      id: 2,
      icon: <FaTint className="text-4xl text-blue-500" />,
      title: 'Smart Irrigation System',
      description: 'Automated water management with intelligent scheduling and conservation',
      features: ['Automated water scheduling', 'Soil moisture-based triggering', 'Water conservation analytics', 'Multi-zone control']
    },
    {
      id: 3,
      icon: <FaBug className="text-4xl text-red-500" />,
      title: 'Pest & Disease Management',
      description: 'Early detection and automated control of pests and crop diseases',
      features: ['Early pest detection alerts', 'Automated pesticide spraying', 'Disease prediction models', 'Preventive care recommendations']
    },
    {
      id: 4,
      icon: <FaChartLine className="text-4xl text-purple-600" />,
      title: 'Farm Analytics Dashboard',
      description: 'Data-driven insights and predictive analytics for better decision making',
      features: ['Crop yield predictions', 'Soil health reports', 'Resource usage analytics', 'Profitability analysis']
    },
    {
      id: 5,
      icon: <FaMobileAlt className="text-4xl text-indigo-500" />,
      title: 'Mobile Farm Management',
      description: 'Complete farm control and monitoring through user-friendly mobile application',
      features: ['Real-time notifications', 'Remote control operations', 'Photo-based issue reporting', 'Multi-language support']
    },
    {
      id: 6,
      icon: <FaUserTie className="text-4xl text-orange-500" />,
      title: 'Agricultural Consultation',
      description: 'Expert guidance and professional advice for modern farming practices',
      features: ['Expert farming advice', 'Crop selection guidance', 'Market trend analysis', 'Government scheme assistance']
    },
    {
      id: 7,
      icon: <FaGraduationCap className="text-4xl text-teal-600" />,
      title: 'Farmer Training Programs',
      description: 'Comprehensive training programs for technology adoption and best practices',
      features: ['Technology usage workshops', 'Sustainable farming practices', 'Equipment operation training', 'Digital literacy programs']
    },
    {
      id: 8,
      icon: <FaTools className="text-4xl text-gray-600" />,
      title: 'Custom Farm Solutions',
      description: 'Tailored automation solutions designed for your specific farming needs',
      features: ['Farm-specific automation setup', 'Integration with existing equipment', 'Scalable system design', 'Maintenance packages']
    },
    {
      id: 9,
      icon: <FaRobot className="text-4xl text-pink-500" />,
      title: 'AI Predictive Analysis',
      description: 'Advanced AI and machine learning for crop forecasting and risk management',
      features: ['Crop disease prediction', 'Yield optimization algorithms', 'Weather pattern analysis', 'Risk assessment models']
    }
  ];

  const futureServices = [
    {
      id: 1,
      icon: <FaCamera className="text-3xl text-green-500" />,
      title: 'Drone Integration',
      description: 'Aerial surveillance and monitoring (Coming Soon)'
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: 'Blockchain Supply Chain',
      description: 'Transparent farm-to-market tracking (Coming Soon)'
    },
    {
      id: 3,
      icon: <FaSolarPanel className="text-3xl text-yellow-500" />,
      title: 'Solar Power Integration',
      description: 'Renewable energy solutions (Coming Soon)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 bg-gradient-to-r from-green-100 to-indigo-50">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Farming Automation <span className="text-[#347433]">Services</span>
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Transform your traditional farming into smart, efficient, and sustainable agriculture 
            with our comprehensive IoT-based automation solutions
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 p-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 group"
            >
              {/* Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition duration-300">
                  {service.icon}
                </div>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Service {service.id}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-800 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-ml text-gray-800">
                    <div className="w-1 h-1 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Action Button */}
              <button className="w-full bg-[#347433] text-white py-3 px-4 rounded-xl font-semibold  duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:bg-green-600">
                <BsPhone className="text-lg" />
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Future Services Section */}
        <div className="bg-gradient-to-r from-green-100 to-indigo-50 rounded-2xl p-8 mb-16 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              <span className="text-[#347433]">Future</span> Enhancements
            </h2>
            <p className="text-gray-600 text-lg">Exciting new features coming soon to revolutionize farming</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300 hover:border-green-600 transition duration-300">
                <div className="flex items-center gap-4 mb-3">
                  {service.icon}
                  <span className="px-2 py-1 bg-green-100 text-[#347433] text-xs font-semibold rounded-full">
                    COMING SOON
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#347433] rounded-2xl shadow-2xl p-8 md:p-5 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <WiDaySunny className="text-6xl mx-auto mb-4" />
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of farmers who have already automated their farms and increased productivity by up to 40%
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                <MdSupportAgent className="text-xl" />
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition duration-300 flex items-center gap-2">
                <BsClipboardData className="text-xl" />
                View Pricing Plans
              </button>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-green-100">
              <div className="flex items-center gap-2">
                <IoLeafOutline className="text-lg" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <WiRain className="text-2xl" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MdAnalytics className="text-lg" />
                <span>Free Installation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;