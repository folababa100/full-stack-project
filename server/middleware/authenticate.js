const {Adminuser} = require('../models/Adminuser');

const authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  Adminuser.findByToken(token).then((user) => {
    if(!user) {
      Promise.reject()
    }

    req.user = user;
    req.token = token;
    next()
  }).catch((e) => {
    res.status(401).send()
  })
}

module.exports = {authenticate}
