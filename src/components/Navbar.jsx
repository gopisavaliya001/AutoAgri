import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
 const navigate = useNavigate()
  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-300 font-semibold" : "hover:text-yellow-300";
  };

  
  const handleSignUpClick = () => {
    // Navigate to sign in page if you have one, or keep as link
    navigate('/signup')
  }

  return (
    <nav className="bg-[#347433] text-white p-3 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo with Link */}
      <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
        AutoAgri
      </Link>
      
      <div className="flex items-center gap-6">
        {/* Navigation Links with React Router */}
        <ul className="flex gap-6">
          <li>
            <Link 
              to="/" 
              className={`text-lg transition duration-300 ${isActive('/')}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/features" 
              className={`text-lg transition duration-300 ${isActive('/features')}`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`text-lg transition duration-300 ${isActive('/services')}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`text-lg transition duration-300 ${isActive('/about')}`}
            >
              About
            </Link>
          </li>
        </ul>
        
        {/* Sign Up Button */}
        <button 
        onClick={handleSignUpClick}
        className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;