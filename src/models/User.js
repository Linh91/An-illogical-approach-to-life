var mongoose = require('mongoose');
var db = require('../../config/database.js')
var Schema = mongoose.Schema;

if(process.env.NODE_ENV == 'test'){
  mongoose.connect(db.test);
  PORT = 3000;
}
else{
  mongoose.connect(db.dev);
  PORT = 9000;
}

var userSchema = new Schema({
  email: { type: String, unique : true, required : true },
  password: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
