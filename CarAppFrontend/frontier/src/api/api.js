import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/cars", // Your backend API URL
  timeout: 5000, // Timeout for requests
});

export const calculateFuelCost = async (carId, source, destination, fuelPrice) => {
  try {
    const response = await api.post("/calculate-cost", {
      carId,
      source,
      destination,
      fuelPrice,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching fuel cost:", error);
    return null;
  }
};
