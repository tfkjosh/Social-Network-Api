//set up mongoose connection
const mongoose = require('mongoose');

//mongoose connected
mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;