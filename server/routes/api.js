const express = require('express');
const router = express.Router();
const axios = require('axios');
const destinationController = require('../controllers/destination');

router.get('/', (req, res) => {
  res.send('Welcome to TicketOverflow');
})

// NOTE: Item API
router.post('/destinations', destinationController.insert)
router.get('/destinations', destinationController.findAll)
router.get('/destinations/:id', destinationController.findById)
router.put('/destinations/:id', destinationController.update)
router.delete('/destinations/:id', destinationController.delete)



module.exports = router;
