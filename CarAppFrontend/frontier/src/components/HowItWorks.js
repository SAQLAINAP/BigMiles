import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <div className="text-left max-w-xl">
              <h3 className="text-xl font-semibold">Step 1: Select Your Car</h3>
              <p className="text-gray-600">
                Choose the car you want to use. We provide detailed mileage data for each
                car, so the calculation is as accurate as possible.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-left max-w-xl">
              <h3 className="text-xl font-semibold">Step 2: Enter Locations</h3>
              <p className="text-gray-600">
                Enter your source and destination locations. You can either use autocomplete
                for easy input or provide a custom distance in kilometers.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-left max-w-xl">
              <h3 className="text-xl font-semibold">Step 3: Get the Estimate</h3>
              <p className="text-gray-600">
                Click "Calculate," and the app will estimate the amount of fuel required and
                the total cost for your journey based on the current fuel price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
