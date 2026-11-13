var mongoose = require('mongoose');

var waterfallSchema = new mongoose.Schema({
  name: String,
  country: String,
  height: Number
});

module.exports = mongoose.model('Waterfall', waterfallSchema);