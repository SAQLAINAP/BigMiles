import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-light py-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-heading font-bold">Fuel Cost Calculator</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-accent transition-all">Home</Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:text-accent transition-all">Calculator</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
