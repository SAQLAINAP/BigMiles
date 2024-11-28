import 'bootstrap/dist/css/bootstrap.min.css';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/App.css";  // Importing global styles (tailwind)

const root = ReactDOM.createRoot(document.getElementById("root"));  // This assumes you have a div with id "root" in index.html
root.render(<App />);
// AOS.init()
