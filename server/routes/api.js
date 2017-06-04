const express = require('express');
const router = express.Router();
const axios = require('axios');
const destinationController = require('../controllers/destination');
const flightController = require('../controllers/flight')
const userController = require('../controllers/user');

router.get('/', (req, res) => {
  res.send('Welcome to TicketOverflow');
})

// NOTE: User API
router.post('/user', userController.insert)

// NOTE: Destination API
router.post('/destination', destinationController.insert)
router.get('/destination', destinationController.findAll)
router.get('/destination/country/:country', destinationController.findByCountry)
router.get('/destination/:id', destinationController.findById)
router.put('/destination/:id', destinationController.update)
router.delete('/destination/:id', destinationController.delete)

// NOTE: Flight API
router.get('/country', flightController.countryAll)
router.get('/airport', flightController.airportAll)
router.get('/flight/:destination', flightController.flightAll)

module.exports = router;
