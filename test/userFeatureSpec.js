process.env.NODE_ENV = 'test'
const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');

var app = require('../server.js')
var User = require('../src/models/User');
var Character = require('../src/models/Character')

describe('Sign Up', function() {
  const browser = new Browser();
  before(function(done) {
    User.remove({}, function(err) {
      browser.visit('http://localhost:3000/', done);
    })
  })

  it('user can sign up', function(done){
    browser
    .fill('email', 'test@test.com')
    .fill('password', '123456')
    .fill('passwordConfirmation', '123456')
    .pressButton('Submit').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h2', 'Create a new character')
    }).then(done, done);
  });
});

describe('End to end Tests', function() {
  const browser = new Browser();

  before(function(done) {
    Character.remove({}, function(err) {
      browser.visit('http://localhost:3000/', done);
    })
  })

  it('user can log in but has no character yet', function(done){
    browser
    .fill('login_email', 'test@test.com')
    .fill('login_password', '123456')
    .pressButton('login').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h2', 'Create a new character')
    }).then(done, done);
  });

  it('users can create a new character', function(done){
    browser
    .fill('name', 'Captian logic')
    .fill('attack', 9)
    .fill('defence', 1)
    .pressButton('submit').then(function() {
      assert.ok(browser.success);
      browser.assert.text('div', 'Character List 1 Captian logic xp: 0 attack: 9 defence: 1 HP: 100')
    }).then(done, done);
  });

  it('users are taken to battle map after choosing character', function(done){
    browser.pressButton('To Battle').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h2', 'Choose Your Destiny');
    }).then(done, done);
  });

  it('users can start a new battle', function(done){
    browser.pressButton('ICE KINGDOM').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h1', 'BATTLE');
    }).then(done, done);
  });






  // it('user can signout when logged in', function(done){
  //   browser.clickLink('Sign Out').then(function() {
  //     assert.ok(browser.success);
  //     browser.assert.text('h2', 'Sign Up or Log In')
  //   }).then(done, done);
  // });

});
