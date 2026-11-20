var mongoose = require('mongoose');

var waterfallSchema = new mongoose.Schema({
  name: String,
  country: String,
  height: {
  type: Number,
  min: 1,
  max: 1000
}
});

module.exports = mongoose.model('Waterfall', waterfallSchema);