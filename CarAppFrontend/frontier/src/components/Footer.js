import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Fuel Cost Calculator. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com" className="text-accent hover:underline">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
