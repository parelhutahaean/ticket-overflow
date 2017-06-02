var Destination = require('../models/destination')

var methods = {}

methods.insert = (req, res) => {
  Destination.create(req.body, (err, destination) => {
    if(err) res.send({err})
    res.send(destination)
  })
}

methods.findAll = (req, res) => {
  Destination.find({}, (err, destinations) => {
    if(err) res.send({err})
    res.send(destinations)
  })
}

methods.findById = (req, res) => {
  Destination.findById(req.params.id, (err, destination) => {
    if(err) res.send({err})
    res.send(destination)
  })
}

methods.update = (req, res) => {
  Destination.update({ _id: req.params.id }, {
    $set: req.body
  }, (err, destination) => {
    if (err) res.send({err})
    res.send(result)
  })
}

methods.delete = (req, res) => {
  Destination.remove({ _id: req.params.id }, (err, destination) => {
    if (err) res.send({ err })
    res.send(destination)
  });
}

module.exports = methods
