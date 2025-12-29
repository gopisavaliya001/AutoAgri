import React from "react";
import { FaChevronRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#347433] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ADDRESS */}
          <div>
            <h3 className="text-lg font-bold mb-4">ADDRESS</h3>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="text-gray-300 mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-300">
                Sal college of engineering,<br />
                ScienceCity, Ahmedabad,<br />
                Gujarat 390060
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-300 mr-2" />
              <p className="text-gray-300">AutoAgri@Gmail.Com</p>
            </div>
          </div>

          {/* CALL US */}
          <div>
            <h3 className="text-lg font-bold mb-4">CALL US</h3>
            <div className="flex items-center mb-1">
              <FaPhone className="text-gray-300 mr-2" />
              <p className="text-gray-300">+91 8542690126</p>
            </div>
            <div className="flex items-center mb-1">
              <FaPhone className="text-gray-300 mr-2" />
              <p className="text-gray-300">+91 7516930485</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-300 mr-2" />
              <p className="text-gray-300">+91 9145236703</p>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center transition-colors">
                  <FaChevronRight className="mr-2 text-sm" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center transition-colors">
                  <FaChevronRight className="mr-2 text-sm" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center transition-colors">
                  <FaChevronRight className="mr-2 text-sm" />
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center transition-colors">
                  <FaChevronRight className="mr-2 text-sm" />
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* OPENING HOURS */}
          <div>
            <h3 className="text-lg font-bold mb-4">OPENING HOURS</h3>
            <div className="flex items-center mb-2">
              <FaClock className="text-gray-300 mr-2" />
              <p className="text-gray-300">Monday - Friday : 9:00 - 21:00</p>
            </div>
            <div className="flex items-center">
              <FaClock className="text-gray-300 mr-2" />
              <p className="text-gray-300">Saturday : 8:00 - 20:00</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;