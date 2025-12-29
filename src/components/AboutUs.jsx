import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-xl font-bold text-gray-700 italic font-semibold">
            "Empowering Farmers Through Technology For Efficient, Sustainable Agriculture."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="md:w-1/2">
            <div className="mb-6">
              <p className="text-gray-900 mb-4">
                We Want To Create A World Where Farming Is More Productive And Environmentally Friendly. 
                Our Technology Helps Farmers Grow More With Less Effort, Conserving Resources And Improving Crop Health.
              </p>
              
              <p className="text-gray-900 mb-6">
                We Started With A Simple Idea: To Help Farmers Through Technology, Over Time, We've Grown Into A Company 
                That Provides Automation Tools To Farms Around The World. Our Solutions Are Trusted By Many Farmers 
                To Increase Their Productivity.
              </p>
            </div>

            {/* Features List */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-[#347433] rounded-full flex items-center justify-center font-bold">Q</span>
                  <span className="text-gray-700">Quality Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-[#347433] rounded-full flex items-center justify-center font-bold">S</span>
                  <span className="text-gray-700">Smart Irrigation</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-[#347433] rounded-full flex items-center justify-center font-bold">C</span>
                  <span className="text-gray-700">Crop Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-[#347433] rounded-full flex items-center justify-center font-bold">L</span>
                  <span className="text-gray-700">Livestock Management</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>
            
            <button className="bg-[#347433] text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300">
              Read More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img 
              src="/AboutUs.jpg" 
              alt="Modern Agriculture" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg hover:scale-101"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;