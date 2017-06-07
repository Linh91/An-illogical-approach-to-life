process.env.NODE_ENV = 'test'
var Character = require('../../src/models/Character');
var assert = require('assert');
var mongoose = require('mongoose');

describe('Character', function() {

  beforeAll(function(done) {
    Character.remove({}, function(err) {
      var testCharacter = new Character();
      testCharacter.name = 'Test Warrior';
      testCharacter.userId = 'ABC1';
      testCharacter.avatar = '/creature.jpg';
      testCharacter.save(function(err) {
        done();
      })
    })
  })

  it('characters should save to the database', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].userId).toBe('ABC1')
      expect(characters[0].avatar).toBe('/creature.jpg')
      expect(characters[0].xp).toBe(0)
      expect(characters[0].level).toBe(1)
      expect(characters[0].attack).toBe(0)
      expect(characters[0].defence).toBe(0)
      expect(characters[0].hp).toBe(100)
      done();
    });
  });
})
