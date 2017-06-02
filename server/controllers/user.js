var User = require('../models/user')

var methods = {}

methods.insert = (req, res) => {
  User.find({id:req.body.id}, (err, users) => {
    if(err) res.send({err})
    if(users.length == 0) {
      User.create(req.body, (err, user) => {
        if(err) res.send({err})
        res.send(user)
      })
    } else {
      res.send(users[0])
    }
  })
}

module.exports = methods
