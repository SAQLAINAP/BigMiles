import React from "react";
import { motion } from "framer-motion";

const TypographyEffect = () => {
  const text = ["Fuel Cost Estimation", "Plan Your Road Trips", "Save on Fuel Costs"];
  return (
    <div className="bg-primary text-light py-20">
      <h1 className="text-center text-4xl md:text-6xl font-heading font-bold mb-6">
        {text.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            className="inline-block px-4"
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <p className="text-center text-xl md:text-2xl mt-4">Accurate, easy, and quick fuel cost calculations for your journeys.</p>
    </div>
  );
};

export default TypographyEffect;
