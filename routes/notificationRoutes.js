const express = require('express');
const notificationController = require('../controllers/notificationController')

const router = express.Router();

router
    .route('/notify-order-confirmed')
    .post(notificationController.sendOrderConfirmationNotification)
    
router
    .route('/notify-shipment')
    .post(notificationController.sendOrderShipmentNotification)

module.exports = router;