var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  name: String,
  image: String,
  price: String,
  city: String,
  country: Number
})

var Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination
