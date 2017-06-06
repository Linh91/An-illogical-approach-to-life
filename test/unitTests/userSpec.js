process.env.NODE_ENV = 'test'
var User = require('../../src/models/User');
var assert = require('assert');
var mongoose = require('mongoose');

describe('User', function() {

  beforeAll(function(done) {
    User.remove({}, function(err) {
      var testUser = new User();
      testUser.email = 's@gmail.com';
      testUser.password = '123login';
      testUser.save(function(err) {
        done();
      })
    })
  })
  it('should save to the database', function(done) {
    User.find({ 'email' : 's@gmail.com' }, function(err, users) {
      expect(users.length).toBe(1)
      done();
    });
  });

})
