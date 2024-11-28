import React from "react";

const UseCalculator = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Use the Fuel Calculator</h2>
        <p className="text-gray-700 text-lg mb-8">
          Simply enter your car model, the start and end locations, or the distance. Let us calculate your fuel costs instantly!
        </p>
        <a href="/calculator">
          <button className="bg-secondary text-light px-6 py-3 rounded-lg hover:bg-primary hover:scale-105 transition-all">
            Try It Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default UseCalculator;
