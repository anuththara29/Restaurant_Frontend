const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurants');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the port number
const PORT = process.env.PORT || 3001;

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');

    // Start the Express server
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Connection error', err);
});

// Use the restaurant routes
app.use('/api/restaurants', restaurantRoutes);
