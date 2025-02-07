const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create an order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;