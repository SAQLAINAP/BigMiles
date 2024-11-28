// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const carRoutes = require('./routes/carRoutes'); // Import the routes

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // Use the carRoutes for the `/api/cars` path
// app.use('/api/cars', carRoutes);  // Ensure this is correct

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Non mongoDB version
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const carRoutes = require('./routes/carRoutes'); // Import the car routes

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// API Routes
app.use('/api/cars', carRoutes); // Prefix all car routes with /api/cars

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
