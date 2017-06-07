var mongoose = require('mongoose');
var db = require('../../config/database.js')
var Schema = mongoose.Schema;

mongoose.connect(db.test)

var userSchema = new Schema({
  email: { type: String, unique : true, required : true },
  password: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
