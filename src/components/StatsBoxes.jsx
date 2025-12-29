export default function StatsBoxes() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Skilled Professionals", value: "135+" },
    { label: "Total Farmers", value: "175+" },
    { label: "Agricultural", value: "1375+" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 max-w-6xl mx-auto">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border border-pink-300 bg-pink-50 rounded-lg h-50 p-10 hover:shadow-2xl hover:scale-105"
        >
          <h3 className="text-lg font-medium text-gray-800">{item.label}</h3>
          <p className="text-3xl font-light text-black mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
