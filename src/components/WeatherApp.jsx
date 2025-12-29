import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    temp: '25°c',
    city: 'Ahmedabad',
    humidity: '50%',
    wind: '15 Km/hr'
  });

  const handleSearch = () => {
    if (city.trim()) {
      setWeatherData({
        temp: '22°c',
        city: city,
        humidity: '50%',
        wind: '16 Km/hr'
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      {/* Weather App Box with Colors */}
      <div className="bg-gradient-to-br from-blue-700 to-purple-400 rounded-3xl shadow-2xl p-8 w-full max-w-md text-white">
        
        {/* Search Section */}
        <div className="flex items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full py-3 px-6 text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-300 text-lg placeholder-gray-500"
          />
          <button
            onClick={handleSearch}
            className="ml-3 bg-white hover:bg-gray-100 text-blue-500 p-3 rounded-full transition-colors duration-200 w-12 h-12 flex items-center justify-center"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>

        {/* Weather Display */}
        <div className="text-center">
          {/* Weather Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="text-6xl">🌧️</div>
            </div>
          </div>
          
          {/* Temperature */}
          <h1 className="text-6xl font-bold text-white mb-2">
            {weatherData.temp}
          </h1>
          
          {/* City Name */}
          <h2 className="text-2xl font-semibold text-white text-opacity-90 mb-12">
            {weatherData.city}
          </h2>

          {/* Details Section */}
          <div className="flex justify-between items-center">
            
            {/* Humidity */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <div className="text-2xl">💧</div>
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-white">
                  {weatherData.humidity}
                </p>
                <p className="text-white text-opacity-80 text-sm">Humidity</p>
              </div>
            </div>

            {/* Wind Speed */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <div className="text-2xl">💨</div>
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-white">
                  {weatherData.wind}
                </p>
                <p className="text-white text-opacity-80 text-sm">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;