import React from "react";

const Disclaimer = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p className="text-gray-700 text-lg">
          The fuel cost estimates provided by this app are approximate and based on
          standard mileage data. Actual fuel consumption may vary based on driving
          conditions, terrain, and vehicle maintenance. Please use the estimates as a
          general guide and adjust according to real-world conditions.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Fuel prices are subject to change and can vary by region. The app does not
          guarantee 100% accuracy in cost estimations.
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;