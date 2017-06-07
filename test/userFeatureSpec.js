const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');

var app = require('../server/index.js')
var User = require('../src/models/User');

describe('Sign Up', function() {
  const browser = new Browser();
  before(function(done) {
    User.remove({}, function(err) {
      browser.visit('http://localhost:9000/', done);
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

describe('Log in', function() {
  const browser = new Browser();

  before(function(done) {
    browser.visit('http://localhost:9000/', done);
  })

  it('user can log in but has no character yet', function(done){
    browser
    .fill('login_email', 'test@test.com')
    .fill('login_password', '123456')
    .pressButton('Log In').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h2', 'Create a new character')
    }).then(done, done);
  });

  it('user can signout when logged in', function(done){
    browser.clickLink('Sign Out').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h2', 'Sign Up or Log In')
    }).then(done, done);
  });

});
