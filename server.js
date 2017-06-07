const express = require('express');
const partials = require('express-partials');
const morgan = require('morgan');
const path = require('path')
var User = require('./src/models/User');
var Character = require('./src/models/Character');
var Battle = require('./src/models/Battle');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var flash = require('connect-flash');

characterView = require('../src/models/listView')

var Enemy = require('./src/models/Enemy');


const app = express();

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
      characterList = characters
      res.render('character/list')
    }
  })
})

app.post('/create', function(req, res){
   var hero = new Character();
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

app.get('/battle', function(req, res){
  sess = req.session
  enemy = new Enemy();
  Character.find({ }, function(err, characters) {
    battle = new Battle(characters[0], enemy);
    res.render('battle/battle')
  })
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
