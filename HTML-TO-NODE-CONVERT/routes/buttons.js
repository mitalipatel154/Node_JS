const express = require('express');
const router = express.Router();
const buttonsController = require('../controllers/buttonsController');

router.get('/buttons', buttonsController.buttons);

module.exports = router;