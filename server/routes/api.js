const express = require('express');
const router = express.Router();
const axios = require('axios');
const destinationController = require('../controllers/destination');
const flightController = require('../controllers/flight')

router.get('/', (req, res) => {
  res.send('Welcome to TicketOverflow');
})

// NOTE: Destination API
router.post('/destination', destinationController.insert)
router.get('/destination', destinationController.findAll)
router.get('/destination/:id', destinationController.findById)
router.put('/destination/:id', destinationController.update)
router.delete('/destination/:id', destinationController.delete)

// NOTE: Flight API
router.get('/country', flightController.countryAll)
router.get('/airport', flightController.airportAll)
router.get('/flight', flightController.flightAll)

module.exports = router;
