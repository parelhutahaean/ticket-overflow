var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  destination: {
    type: Schema.Types.ObjectId,
    ref: 'Destination'
  },
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
