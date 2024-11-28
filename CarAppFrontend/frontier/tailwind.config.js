/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Blue
        secondary: "#10B981", // Green
        dark: "#1F2937", // Dark Gray/Black
        light: "#FFFFFF", // White
        accent: "#F59E0B", // Accent yellow for buttons, highlights
      },
      spacing: {
        '128': '32rem', // Custom spacing (for larger sections, padding)
      },
      fontFamily: {
        body: ["'Open Sans'", "sans-serif"],
        heading: ["'Poppins'", "sans-serif"]
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
