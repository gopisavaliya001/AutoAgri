import React from "react";

const Team = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-600">
            We're Super Professional At Our Skills
          </p>
        </div>

        {/* Team Grid - 4 boxes in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Team Member 1 */}
          <div className="border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/M1.jpg" 
              alt="Leanne Graham" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-black mb-3">
              Aayushi Savaliya
            </h3>
           <h4 className="text-md font-semibold text-black mb-3" >Software Developer</h4>
            <p className="text-gray-600">
              Aayushi develops user-friendly web and mobile applications for farmers, integrating IoT and AI to make data-driven decisions easy and accessible.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/m2.webp"
              alt="Ervin Howell" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-black mb-3">
              Priyanshi vaghasiya
            </h3>
            <h4 className="text-md font-semibold text-black mb-3" >Agriculture Specialist</h4>
            <p className="text-gray-600">
              Priyanshi focuses on sustainable farming practices and precision agriculture. She helps design eco-friendly solutions that boost crop yield and reduce waste.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/m3.jpg"
              alt="Clementine Bauch" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Nisarg Solanki
            </h3>
            <h4 className="text-md font-semibold text-black mb-3" >Project Manager</h4>
            <p className="text-gray-600">
              Nisarg oversees project planning, coordination, and team collaboration. He ensures timely delivery and smooth communication across all project modules.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/m4.jpg"
              alt="Patricia Lebsack" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-black mb-3">
              Taha Tinwala
            </h3>
           <h4 className="text-md font-semibold text-black mb-3" >IoT & Hardware Engineer</h4>
            <p className="text-gray-600">
             Taha designs smart devices and sensors for monitoring soil, weather, and crop health. His work ensures accurate data collection for efficient farm management.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Team;