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

var characterSchema = new Schema({
  name: { type: String, unique : true, required : true },
  userId: String,
  xp: { type: Number, default: 0 },
  attack: { type: Number, default: 5 },
  defence: { type: Number, default: 5 },
  level: { type: Number, default: 1 },
  avatar: String,
  hp: { type: Number, default: 100 }
});

var Character = mongoose.model('Character', characterSchema);
module.exports = Character;
