var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  city: String,
  country: String,
})

var Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination
