const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.dashboard);        // homepage = dashboard
router.post('/subscribe', dashboardController.subscribe);

module.exports = router;