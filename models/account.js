var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var accountSchema = new mongoose.Schema({
  username: String
});

accountSchema.plugin(
  passportLocalMongoose.default || passportLocalMongoose
);

module.exports = mongoose.model('Account', accountSchema);