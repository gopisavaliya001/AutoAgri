import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from "./pages/AboutPage"
import WeatherApp from './components/WeatherApp';
import SignUp from './pages/SignUp';
import ServicesPage from './ServicesPage';
// import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/about" element={<AboutPage />} />
       <Route path="/weather" element={<WeatherApp />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/services" element={<ServicesPage/>} />
      
    </Routes>
  );
};

export default AppRoutes;