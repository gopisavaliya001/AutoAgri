import React from 'react';
import { 
  FaUsers, 
  FaUniversity, 
  FaLightbulb, 
  FaTractor, 
  FaAward,
  FaHandshake,
  FaGlobeAsia,
  FaSeedling,
  FaMicrochip,
  FaChartLine,
  FaWater,
  FaBug,
  FaMobileAlt,
  FaCloud,
  FaWifi,
  FaCog,
  FaDatabase
} from 'react-icons/fa';
import { 
  IoIosSchool,
  IoMdCalendar,
  IoIosAnalytics,
  IoIosPhonePortrait
} from 'react-icons/io';
import { 
  GiGrowth,
  GiWaterDrop,
  GiPlantRoots
} from 'react-icons/gi';
import { 
  SiArduino,
  SiRaspberrypi
} from 'react-icons/si';
import { 
  BsCpuFill,
  BsCloudCheckFill
} from 'react-icons/bs';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aayushi Savaliya',
      initial: 'AS'
      
    },
    {
      id: 2,
      name: 'Priyanshi Vaghasiya',
      initial: 'PV'
    },
    {
      id: 3,
      name: 'Nisarg Solanki',
      initial: 'NS'
    },
    {
      id: 4,
      name: 'Taha Tinwala',
      initial: 'TT'
    }
  ];

  const projectFeatures = [
    {
      icon: <FaWater className="text-3xl text-blue-500" />,
      title: 'Smart Irrigation',
      description: 'Automated water management based on soil moisture levels',
      benefits: ['Water conservation', 'Optimal hydration', 'Reduced costs']
    },
    {
      icon: <FaBug className="text-3xl text-red-500" />,
      title: 'Pest Control',
      description: 'Early detection and automated pest management system',
      benefits: ['Crop protection', 'Reduced pesticides', 'Higher yield']
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: 'Real-time Analytics',
      description: 'Continuous monitoring and data-driven insights',
      benefits: ['Better decisions', 'Predictive analysis', 'Efficiency boost']
    },
    {
      icon: <FaMobileAlt className="text-3xl text-purple-500" />,
      title: 'Remote Monitoring',
      description: 'Mobile app for 24/7 farm management and control',
      benefits: ['Anywhere access', 'Instant alerts', 'Easy control']
    }
  ];

  const projectStats = [
    {
      icon: <FaUniversity className="text-2xl" />,
      title: 'Institution',
      value: 'SAL College of Engineering',
      subtitle: 'GTU Affiliated'
    },
    {
      icon: <IoIosSchool className="text-2xl" />,
      title: 'Academic Program',
      value: 'B.E. Computer Engineering',
      subtitle: 'Semester V'
    },
    {
      icon: <IoMdCalendar className="text-2xl" />,
      title: 'Project Duration',
      value: '2025-26',
      subtitle: 'Academic Year'
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: 'Supervisors',
      value: 'Expert Faculty',
      subtitle: 'Prof. Mikin Dagli & Prof. Vijaysinh Jadeja'
    }
  ];

  const projectVision = [
    {
      icon: <FaTractor className="text-2xl text-green-600" />,
      title: 'Our Mission',
      description: 'To revolutionize traditional farming through affordable automation solutions that increase productivity while promoting sustainable agricultural practices.'
    },
    {
      icon: <FaLightbulb className="text-2xl text-yellow-500" />,
      title: 'Our Vision',
      description: 'To become the leading provider of smart farming solutions that empower farmers with technology-driven insights for better decision-making and higher yields.'
    },
    {
      icon: <FaHandshake className="text-2xl text-blue-600" />,
      title: 'Our Approach',
      description: 'Combining design thinking with cutting-edge IoT technology to create user-friendly, scalable, and cost-effective farming automation systems.'
    }
  ];

  const technologies = [
    { 
      name: 'IoT Sensors', 
      icon: <FaWifi className="text-3xl text-blue-500" />, 
      description: 'Soil moisture, temperature, and environmental monitoring' 
    },
    { 
      name: 'Microcontrollers', 
      icon: <div className="flex gap-1">
              <SiArduino className="text-3xl text-green-600" />
              <SiRaspberrypi className="text-3xl text-red-500" />
            </div>, 
      description: 'Arduino/Raspberry Pi for system control' 
    },
    { 
      name: 'Data Analytics', 
      icon: <IoIosAnalytics className="text-3xl text-purple-500" />, 
      description: 'Real-time insights and predictive analysis' 
    },
    { 
      name: 'Mobile Applications', 
      icon: <IoIosPhonePortrait className="text-3xl text-indigo-500" />, 
      description: 'Remote monitoring and control' 
    },
    { 
      name: 'Automation Systems', 
      icon: <FaCog className="text-3xl text-gray-600" />, 
      description: 'Smart irrigation and pest control' 
    },
    { 
      name: 'Cloud Integration', 
      icon: <BsCloudCheckFill className="text-3xl text-blue-400" />, 
      description: 'Data storage and remote access' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">AutoAgri</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transforming agriculture through innovative automation solutions. Our Farming Automation System 
            represents a leap forward from conventional farming practices to contemporary, efficient, and 
            data-driven processes.
          </p>
        </div>

        {/* Project Overview - Redesigned */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
              <FaSeedling className="text-green-600" />
              Project Overview
            </h2>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              The <strong className="text-green-600">Farming Automation System</strong> addresses critical challenges in modern agriculture 
              through IoT-based automation, real-time monitoring, and data-driven decision making to enhance 
              productivity while promoting sustainable farming practices.
            </p>
          </div>

          {/* Project Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {projectFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border border-green-100">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-md mb-3">{feature.description}</p>
                <div className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <span key={idx} className="block text-md text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-green-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1">{stat.title}</h4>
                <p className="text-md font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section - Simplified */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <FaUsers className="text-green-500" />
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-green-100">
                <div className="w-15 h-15 bg-gradient-to-br from-green-300 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-md">
                    {member.initial}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-700">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projectVision.map((vision, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                {vision.icon}
                <h3 className="text-xl font-bold text-gray-800">{vision.title}</h3>
              </div>
              <p className="text-gray-800 leading-relaxed">{vision.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <FaCloud className="text-green-600" />
            Technologies & Innovations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center border border-gray-200 p-6 hover:bg-green-50 rounded-xl transition duration-300 border border-gray-100">
                <div className="flex justify-center mb-3">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{tech.name}</h4>
                <p className="text-gray-600 text-md">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Impact */}
        <div className="bg-gradient-to-r from-[#347433] to-green-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <FaGlobeAsia className="text-yellow-400" />
              Project Impact
            </h2>
            <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
              Our Farming Automation System addresses critical agricultural challenges while promoting 
              sustainable practices and empowering farmers with technology-driven solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">40%</div>
                <p className="text-green-100">Reduction in Water Usage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">30%</div>
                <p className="text-green-100">Increase in Crop Yield</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">60%</div>
                <p className="text-green-100">Reduction in Manual Labor</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;