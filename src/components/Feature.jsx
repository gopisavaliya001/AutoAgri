import React, { useState } from "react";

const features = [
  {
    title: "Tractor Operated Sprayer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/tractor.jpg",
  },
  {
    title: "Drones",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/drone.jpg",
  },
  {
    title: "Automated Plow The Field",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/plow.jpg",
  },
  {
    title: "Harvest Automation",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/harvest.jpg",
  },
  {
    title: "Efficient Threshing",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/Thresing.jpg",
  },
  {
    title: "Smart Harvest",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/SmartHarvest.jpg",
  },
  {
    title: "Drip Irrigation",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/drip.jpg",
  },
  {
    title: "Water Sprinkler System",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/Water Sprinkler System.jpg",
  },
  {
    title: "Remote Controlled Irrigation System",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur",
    img: "/Remote Controlled Irrigation System.jpg",
  },
];

const Features = () => {
  // state to control how many cards are visible
  const [visibleCount, setVisibleCount] = useState(3);

  // function to load 3 more
  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-12 max-w-6xl mx-auto bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore The Smart Technology
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.slice(0, visibleCount).map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            {/* Image */}
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />

            {/* Content */}
            <div className="p-8 text-center flex-grow">
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm mb-5">{feature.desc}</p>
              <button className="px-4 py-2 border bg-[#347433] text-white rounded-md hover:bg-green-600 transition">
                See More
              </button>
            </div>

            {/* Footer pinned at bottom */}
            <div className="border-t py-3 text-center text-gray-500 text-sm">
              ⭐ ⭐ ⭐ ⭐ ☆ 123 Reviews
            </div>
          </div>
        ))}
      </div>

      {/* Load More button */}
      {visibleCount < features.length && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-white border text-black rounded-md hover:bg-[#347433] hover:text-white transition"
          >
            Learn More
          </button>
        </div>
      )}
    </section>
  );
};

export default Features;
