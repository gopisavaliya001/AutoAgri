import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import StatsBoxes from "../components/StatsBoxes";
import AboutUs from "../components/AboutUs";
import Facilities from "../components/Facilities";
import Team from "../components/Team";


const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* <Navbar /> */}
      <Hero />
      <Feature />
      <StatsBoxes />
      <AboutUs/>
      <Facilities/>
      <Team/>
      <Footer />
      
    </div>
  );
};

export default Home;
