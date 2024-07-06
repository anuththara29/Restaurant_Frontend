const express = require('express');
const Restaurant = require('../models/restaurant');
const router = express.Router();

// Create a new restaurant
router.post('/', async (req, res) => {
    try {
        // Check for duplicate restaurant
        const { name, address, telephone } = req.body;
        const existingRestaurant = await Restaurant.findOne({ name, address, telephone });
        if (existingRestaurant) {
            return res.status(400).send({ error: 'Already exists' });
        }

        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Retrieve restaurant details by ID
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).send({ error: 'Restaurant not found' });
        }
        res.send(restaurant);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update restaurant information by ID
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate
        (req.params.id, req.body, { new: true, runValidators: true });
        if (!restaurant) {
            return res.status(404).send({ error: 'Restaurant not found' });
        }
        res.send(restaurant);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete a restaurant by ID
router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).send({ error: 'Restaurant not found' });
        }
        res.send({ message: 'Restaurant deleted' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// List all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.send(restaurants);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
