var mongoose = require('mongoose');

var waterfallSchema = new mongoose.Schema({
  name: {
  type: String,
  minlength: 3,
  maxlength: 100
},
  country: String,
  height: {
  type: Number,
  min: 1,
  max: 1000
}
});

module.exports = mongoose.model('Waterfall', waterfallSchema);