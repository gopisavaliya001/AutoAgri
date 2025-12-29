import React from "react";
import { useNavigate } from "react-router-dom";

const Facilities = () => {
  const navigate = useNavigate();

  const facilities = [
    {
      title: "Smart Management",
      image: "/SmartFarm.jpg",
      route: "/smart-farm"
    },
    {
      title: "Mobile App Integration", 
      image: "/MobileApp.jpg",
      route: "/mobile-app"
    },
    {
      title: "Market Intelligence",
      image: "/market.webp", 
      route: "/market-intel"
    },
    {
      title: "Weather Prediction",
      image: "/weather.jpg",
      route: "/weather"
    }
  ];

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-black mb-12">
          Our Facilities
        </h1>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="border border-gray-300 rounded-lg p-6 text-center flex-grow hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg text-center font-semibold text-black mb-4">
                {facility.title}
              </h3>
              <button 
                onClick={() => handleButtonClick(facility.route)}
                className="px-4 py-2 bg-[#347433] text-white rounded-md hover:bg-green-600 transition duration-300"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;