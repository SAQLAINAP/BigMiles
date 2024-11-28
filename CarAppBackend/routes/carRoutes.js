// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();
// const Car = require('../models/Car');

// // POST route to calculate fuel required
// router.post('/calculate', async (req, res) => {
//   const { carId, distance } = req.body;

//   console.log("Received carId:", carId);  // Log the carId for debugging

//   try {
//     // Convert carId to ObjectId
//     const objectId = new mongoose.Types.ObjectId(carId);  // Correct way to create an ObjectId instance
//     console.log("Converted ObjectId:", objectId); // Log the converted ObjectId

//     // Query MongoDB using ObjectId
//     const car = await Car.findById(objectId);
//     console.log("Queried car:", car);  // Log the car object returned by the query

//     if (!car) {
//       console.log("Car not found for carId:", carId);  // Log if the car is not found
//       return res.status(404).json({ message: 'Car not found' });
//     }

//     // Assuming the mileage is in the format '26.6 km/kg' and converting it to a number
//     const fuelRequired = distance / parseFloat(car.Mileage.split(" ")[0]);

//     res.json({ fuelRequired });

//   } catch (err) {
//     console.error("Error during calculation:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


// Non  mongoDB version below
// const express = require('express');
// const router = express.Router();
// const fs = require('fs');

// // Load the JSON data when the server starts
// const carData = JSON.parse(fs.readFileSync('./UpdatedCarDetails.json', 'utf-8'));

// // POST route to calculate fuel required
// router.post('/calculate', (req, res) => {
//   const { carId, distance } = req.body;

//   try {
//     console.log("Received carId:", carId);

//     // Find the car by _id
//     const car = carData.find((car) => car._id === carId);

//     if (!car) {
//       console.log("Car not found for _id:", carId);
//       return res.status(404).json({ message: 'Car not found' });
//     }

//     console.log("Queried car:", car);

//     // Assuming the mileage is in the format '26.6 km/kg' or '19.67 kmpl'
//     const mileageValue = parseFloat(car.Mileage.split(" ")[0]);
//     const fuelRequired = distance / mileageValue;

//     // Round the result to 2 decimal places
//     const roundedFuel = parseFloat(fuelRequired.toFixed(2));

//     res.json({ fuelRequired: roundedFuel });

//   } catch (err) {
//     console.error("Error during calculation:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


//Version with the Geo Location enabled:
// routes/carRoutes.js
// const express = require('express');
// const axios = require('axios');
// const router = express.Router();
// const carData = require('../UpdatedCarDetails.json'); // Assuming car data is in JSON format

// // Function to fetch coordinates using Nominatim API
// const getCoordinates = async (location) => {
//   const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${location}&limit=1`; // Limit to 1 result
//   try {
//     const response = await axios.get(nominatimUrl);
//     const result = response.data[0];
//     if (result) {
//       return { lat: result.lat, lon: result.lon }; // Return latitude and longitude
//     }
//     return null;
//   } catch (error) {
//     console.error("Error fetching coordinates from Nominatim:", error);
//     return null;
//   }
// };

// // Haversine formula to calculate distance between two coordinates (in km)
// const haversineDistance = (lat1, lon1, lat2, lon2) => {
//   const R = 6371; // Radius of the Earth in km
//   const toRad = (deg) => (deg * Math.PI) / 180; // Convert degrees to radians

//   const dLat = toRad(lat2 - lat1);
//   const dLon = toRad(lon2 - lon1);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(toRad(lat1)) *
//       Math.cos(toRad(lat2)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c; // Distance in km
// };

// // POST route to calculate distance and fuel cost
// router.post('/calculate-cost', async (req, res) => {
//   const { carId, source, destination, fuelPrice } = req.body;

//   try {
//     // Step 1: Find the car in the data
//     const car = carData.find((car) => car._id === carId);
//     if (!car) {
//       return res.status(404).json({ message: 'Car not found' });
//     }

//     // Step 2: Get coordinates for source and destination using Nominatim API
//     const sourceCoordinates = await getCoordinates(source);
//     const destinationCoordinates = await getCoordinates(destination);

//     if (!sourceCoordinates || !destinationCoordinates) {
//       return res.status(400).json({ message: 'Invalid locations' });
//     }

//     // Step 3: Calculate the distance using the Haversine formula
//     const distance = haversineDistance(
//       parseFloat(sourceCoordinates.lat),
//       parseFloat(sourceCoordinates.lon),
//       parseFloat(destinationCoordinates.lat),
//       parseFloat(destinationCoordinates.lon)
//     );

//     // Step 4: Calculate the fuel required
//     const mileageValue = parseFloat(car.Mileage.split(" ")[0]); // Assuming mileage is in km/l
//     const fuelRequired = distance / mileageValue;

//     // Step 5: Calculate the total cost
//     const totalCost = fuelRequired * fuelPrice;

//     res.json({
//       fuelRequired: fuelRequired.toFixed(2), // Rounded to 2 decimal places
//       totalCost: totalCost.toFixed(2), // Rounded to 2 decimal places
//     });
//   } catch (err) {
//     console.error("Error during calculation:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const path = require('path');
const router = express.Router();

// Load the car data from the local dataset (JSON file)
const cars = require('../CleanedCarDetails.json'); // Adjust path if needed

// Endpoint to get a list of all cars
router.get('/cars', (req, res) => {
  try {
    // Send the list of cars
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Error loading car data' });
  }
});

// Endpoint to calculate fuel cost (existing functionality)
router.post('/calculate-cost', async (req, res) => {
  const { carId, source, destination, fuelPrice } = req.body;
  try {
    // Find the car based on the carId
    const car = cars.find(c => c._id === carId);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    const fuelRequired = (destination / parseFloat(car.Mileage.split(' ')[0])); // Calculate fuel required based on mileage
    const totalCost = fuelRequired * fuelPrice;

    res.json({ fuelRequired: fuelRequired.toFixed(2), totalCost: totalCost.toFixed(2) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;