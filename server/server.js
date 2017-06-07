const express = require('express');
const partials = require('express-partials');
const morgan = require('morgan');
const path = require('path')
var User = require('../src/models/User');
var Character = require('../src/models/Character');
var Battle = require('../src/models/Battle');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var flash = require('connect-flash');

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
app.use(express.static(__dirname + '/public/views'));

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
      res.redirect('character/new')
    } else {
      res.render('character/list')
    }
  })
})

app.get('/signout', function(req, res) {
  req.session = undefined
  res.redirect('/')
})

app.get('/battle', function(req, res){
  Character.find({}, function(err, characters) {
    var testCharacter = characters[0]
    battle = new Battle(testCharacter);
    res.render('battle/battle')
  })
})

module.exports = app;
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
  // res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.json());
// app.use(express.static(path.resolve(__dirname, '..', 'public')));
  // res.send('hello')
