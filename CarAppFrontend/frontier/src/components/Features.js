import React from "react";

const features = [
  { title: "Fast & Accurate", description: "Get quick fuel cost estimates with accurate data." },
  { title: "User-Friendly", description: "Simple interface for users of all levels." },
  { title: "Multiple Car Support", description: "Choose from multiple cars to estimate fuel usage." },
];

const Features = () => {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
