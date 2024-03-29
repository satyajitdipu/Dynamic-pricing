const express = require('express');
const router = express.Router();
const  calculateDeliveryPrice  = require('../controllers/PricingControllers');

router.post('/calculate-price', calculateDeliveryPrice);

module.exports = router;
