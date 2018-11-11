const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  accountId: {
    type: Number,
    unique: true,
    default: 1000
  },
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  numReferrals: {
    type: Number,
    default: 0
  },
  unpaidAmount: {
    type: Number,
    default: 0
  },
  referredBy: {
    type: Number,
    default: null
  },
  referralsPercentage: {
    type: Number,
    default: 0.05
  },
  referralsEarning: {
    type: Number,
    default: 0
  },
  totalAmountEarned: {
    type: Number,
    default: 0
  },
  paymentPercentage: {
    type: Number,
    default: 0.8
  },
  banned: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject()

  return _.pick(userObject, ["_id", "email", "username", "tokens[0].token"])
}

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({ _id: user._id.toHexString(), access }, process.env.JWT_SECRET).toString();

  user.tokens.push({ access, token });

  return user.save().then(() => {
    return token;
  })
}

UserSchema.methods.removeToken = function () {
  var user = this;

  return user.update({
    $set: {
      tokens: []
    }
  })
}

UserSchema.statics.findByCredentials = function (email, password) {
  var User = this;

  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      // Use bcrypt.compare to compare password and user.password
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  if(user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next()
      })
    })
  } else {
    next()
  }
})

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) {
    return Promise.reject()
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    "token.access": 'auth'
  })
}

const User = mongoose.model('User', UserSchema)

module.exports = {User}
