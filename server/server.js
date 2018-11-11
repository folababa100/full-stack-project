require('./config/config')
const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const passport = require('passport');
const {Adminuser} = require('./models/Adminuser');
const {User} = require('./models/User')
const {authenticate} = require('./middleware/authenticate');

const port = process.env.PORT;

const app = express();

app.use(passport.initialize());

app.use(passport.session());

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-auth',);
  res.setHeader('Cache-Control', 'no-cache');
  next();
})

app.post('/adminuser', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new Adminuser(body);

  // console.log(req.connection.remoteAddress)

  user.save().then(() => {
    return user.generateAuthToken()
  }).then((token) => {
    res.header('x-auth', token).send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password', 'username', 'accountId']);
  var user = new User(body);

  user.save().then(() => {
    User.findAndModify({ accountId: body.accountId }, { $inc: { seq: 1 } })
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

// app.patch('/users/:id', authenticate, (req, res) => {
//   var id = req.params.id;
//   var body = _.pick(req.body, ['banned'])
// })

app.listen(port, () => {
  console.log(`Server Started at port ${port}`)
})

module.exports = {app}
