import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CalculatorPage from "./pages/CalculatorPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for Calculator Page */}
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
