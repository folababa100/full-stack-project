const mongoose = require('mongoose');

var Profile = mongoose.model('Profile', {
  picture: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

module.exports = {Profile}
