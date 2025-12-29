import React, { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your 3 slides with different images
  const slides = [
    {
      image: "/image.png",
    },
    {
      image: "/image2.jpg",   
    },
    {
      image: "/image3.webp",
    }
  ];

  // Function to go to next slide when clicked
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="h-130 flex flex-col justify-center items-center text-center bg-cover bg-center relative cursor-pointer"
      style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      onClick={nextSlide}
    >
      

      {/* Slide Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-1 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;