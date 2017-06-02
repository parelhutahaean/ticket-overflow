var User = require('../models/user')
const jwt = require('jsonwebtoken');

var methods = {}

methods.insert = (req, res) => {
  var token
  User.find({id:req.body.id}, (err, users) => {
    if(err) res.send({err})
    if(users.length == 0) {
      User.create(req.body, (err, user) => {
        if(err) res.send({err})
        token = jwt.sign(user._doc, 'SECRET');
        res.send(token)
      })
    } else {
      token = jwt.sign(users[0]._doc, 'SECRET');
      res.send(token)
    }
  })
}

module.exports = methods
