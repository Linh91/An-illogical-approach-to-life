const express = require('express');
const partials = require('express-partials');
const morgan = require('morgan');
const path = require('path')
var database = require('./config/database.js')
var User = require('./src/models/User');
var EndGame = require('./src/models/EndGame');
var Rewards = require('./src/models/Rewards');
var Attack = require('./src/models/Attack');
var Heal = require('./src/models/Heal');
var Character = require('./src/models/Character');
var Battle = require('./src/models/Battle');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var flash = require('connect-flash');
var mongoose = require('mongoose');


var Enemy = require('./src/models/Enemy');


const app = express();
var PORT;

if(process.env.NODE_ENV == 'test'){
  mongoose.connect(database.test);
  PORT = 3000;
}
else{
  mongoose.connect(database.dev);
  PORT = 9000;
}

app.use(partials());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.render('signup', {
    message: req.flash('wrongPassword').join()
  });

});

app.post('/login', function(req, res) {
  sess = req.session
  var email = req.body.login_email
  var password = req.body.login_password
  User.find({email: email}, function(err, users) {
    if (bcrypt.compareSync(password, users[0].password)) {
      sess.userId = users[0]._id
      res.redirect('/character')
    }else{
      req.flash('wrongPassword', "You could not be logged in, please try again");
      res.redirect('/login')
    }
  });
});

app.post('/signup', function(req, res) {
  var email = req.body.email
  if (req.body.password !== req.body.passwordConfirmation) {
    req.flash('wrongPassword', "Your passwords did not match, please try again");
    res.redirect('/')
  }else{
    User.find({ email : email }, function(err, users) {
      if (users.length == 0) {
        sess = req.session
        var user = new User();
        user.email = req.body.email
        user.password = bcrypt.hashSync(req.body.password, 10);
        user.save();
        sess.userId = user._id
        res.redirect('character/new')
      }else{
        req.flash('wrongPassword', "You could not be signed up, please try again or try logging in");
        res.redirect('/')
      }
    })
  }
});

app.get('/character/new', function(req, res) {
  res.render('character/new')
})

app.get('/character', function(req, res) {
  Character.find({ userId : sess.userId }, function(err, characters) {
    if (characters.length == 0 ) {
      res.redirect('/character/new')
    } else {
      res.render('character/list', {
      })
    }
  })
})

app.get('/databaseQuery', function(req, res){
  Character.find({ userId : sess.userId }, function(err, characters) {
    res.json(characters)
  });
});

app.get('/choose-character', function(req, res){
  Character.find({ _id : req.query.id }, function(err, character) {
    sess.hero = character[0]
    res.redirect('/map')
  })
})

app.get('/map', function(req, res){
    res.render('battleMap')
})

app.post('/create', function(req, res){
   var hero = new Character();
   console.log(hero)
   hero.name = req.body.name
   hero.attack = req.body.attack
   hero.defence = req.body.defence
   hero.userId = sess.userId
   hero.avatar = 'someshit here';
   hero.save()
   res.redirect('character')
})

app.get('/signout', function(req, res) {
  req.session = undefined
  res.redirect('/')
})

app.get('/new-battle', function(req, res){
  secondPlayer = new Enemy();
  sess.battle = new Battle(sess.hero, secondPlayer)
  console.log(sess.battle)
  res.redirect('/battle')
})

app.get('/battle', function(req, res){
  var checkEndGame = new EndGame(sess.battle)
  if (sess.battle.outcome == 'won') {
    res.redirect('/win')
  } else if (sess.battle.outcome == 'lost'){
    res.redirect('/lose')
  } else {
    res.render('battle/battle', {
      lastGo: sess.lastGo,
      battle: sess.battle
    })
  }
})

app.post('/attack', function(req, res) {
  var attack = new Attack(sess.battle.firstPlayer, sess.battle.secondPlayer);
  sess.lastGo = attack.outcome
  res.redirect('/battle')
})

app.post('/heal', function(req, res) {
  var heal = new Heal(sess.battle.firstPlayer);
  sess.lastGo = heal.outcome
  res.redirect('/battle')
})

app.get('/win', function(req, res) {
  sess.lastGo = undefined
  var reward = new Rewards(sess.hero)
  sess.hero.save();
  res.render('battle/win',{
    reward: reward
  })
})

app.get('/lose', function(req, res) {
  res.render('battle/lose')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
