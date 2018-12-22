const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useCreateIndex: true, useNewUrlParser: true });

module.exports = {mongoose}