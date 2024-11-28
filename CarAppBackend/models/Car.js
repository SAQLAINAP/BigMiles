const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    Name: String,
    Year: Number,
    Fuel_Type: String,
    Transmission: String,
    Mileage: String,
    Engine: String,
    Power: String,
    Seats: Number,
    Price: Number
});

module.exports = mongoose.model('Car', carSchema);