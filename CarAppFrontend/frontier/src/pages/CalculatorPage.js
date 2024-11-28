// import React, { useState } from "react";
// import { calculateFuelCost } from "../api/api"; // Import the API function

// const CalculatorPage = () => {
//   const [carId, setCarId] = useState("a6fb963d-6d91-4191-bff5-509f037c6116"); // Example car ID
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [fuelPrice, setFuelPrice] = useState(100); // Default fuel price
//   const [fuelRequired, setFuelRequired] = useState(null);
//   const [totalCost, setTotalCost] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!source || !destination) {
//       setError("Please provide both source and destination.");
//       return;
//     }

//     setError(""); // Clear previous error

//     // Call the backend API
//     const result = await calculateFuelCost(carId, source, destination, fuelPrice);

//     if (result) {
//       setFuelRequired(result.fuelRequired);
//       setTotalCost(result.totalCost);
//     } else {
//       setError("Error calculating fuel cost. Please try again.");
//     }
//   };

//   return (
//     <div className="py-12 bg-gray-100">
//       <h1 className="text-4xl text-center font-bold mb-6">Fuel Cost Calculator</h1>

//       <div className="container mx-auto bg-white p-6 rounded shadow-lg max-w-lg">
//         {error && <div className="text-red-500 mb-4">{error}</div>}
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Source Location</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={source}
//               onChange={(e) => setSource(e.target.value)}
//               placeholder="Enter source location"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Destination Location</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               placeholder="Enter destination location"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Fuel Price (₹)</label>
//             <input
//               type="number"
//               className="w-full p-2 border rounded"
//               value={fuelPrice}
//               onChange={(e) => setFuelPrice(e.target.value)}
//               placeholder="Enter fuel price per liter/kg"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-all"
//           >
//             Calculate
//           </button>
//         </form>

//         {fuelRequired && totalCost && (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold">Calculation Results</h3>
//             <p className="text-lg">
//               Fuel Required: <span className="font-bold">{fuelRequired} kg</span>
//             </p>
//             <p className="text-lg">
//               Total Cost: <span className="font-bold">₹{totalCost}</span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CalculatorPage;
import React, { useState, useEffect } from "react";
import { calculateFuelCost } from "../api/api"; // Import the API function

const CalculatorPage = () => {
  const [cars, setCars] = useState([]);  // Initialize cars as an empty array
  const [selectedCar, setSelectedCar] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [fuelPrice, setFuelPrice] = useState(100); // Default fuel price
  const [fuelRequired, setFuelRequired] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [error, setError] = useState("");

  // Fetch available cars from the backend when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cars/cars");
        const data = await response.json();

        console.log("Fetched cars:", data);  // Log the data

        if (Array.isArray(data)) {
          setCars(data); // Set the cars in the state if it's an array
          if (data.length > 0) {
            setSelectedCar(data[0]._id); // Set default selected car to the first one
          }
        } else {
          console.error("Expected an array of cars, but got:", data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!source || !destination || !selectedCar) {
      setError("Please provide all the fields.");
      return;
    }

    setError(""); // Clear previous error

    // Call the backend API for fuel cost calculation
    const result = await calculateFuelCost(selectedCar, source, destination, fuelPrice);

    if (result) {
      setFuelRequired(result.fuelRequired);
      setTotalCost(result.totalCost);
    } else {
      setError("Error calculating fuel cost. Please try again.");
    }
  };

  return (
    <div className="py-12 bg-gray-100">
      <h1 className="text-4xl text-center font-bold mb-6">Fuel Cost Calculator</h1>

      <div className="container mx-auto bg-white p-6 rounded shadow-lg max-w-lg">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Car Dropdown */}
          <div className="flex justify-center mb-6">
            <label htmlFor="car" className="block text-gray-700 mr-4">Select Car</label>
            <select
              id="car"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="p-2 border rounded"
            >
              {cars.length > 0 ? (
                cars.map((car) => (
                  <option key={car._id} value={car._id}>
                    {car.Name} - {car.Mileage}
                  </option>
                ))
              ) : (
                <option disabled>No cars available</option>
              )}
            </select>
          </div>

          {/* Source and Destination Inputs */}
          <div>
            <label className="block text-gray-700">Source Location</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source location"
            />
          </div>

          <div>
            <label className="block text-gray-700">Destination Location</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination location"
            />
          </div>

          <div>
            <label className="block text-gray-700">Fuel Price (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              placeholder="Enter fuel price per liter/kg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-all"
          >
            Calculate
          </button>
        </form>

        {fuelRequired && totalCost && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Calculation Results</h3>
            <p className="text-lg">
              Fuel Required: <span className="font-bold">{fuelRequired} kg</span>
            </p>
            <p className="text-lg">
              Total Cost: <span className="font-bold">₹{totalCost}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorPage;
