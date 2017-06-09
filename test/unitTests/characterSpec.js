process.env.NODE_ENV = 'test'
var Character = require('../../src/models/Character');
var assert = require('assert');



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

  it('characters have an ID', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].userId).toBe('ABC1')
      done();
    })
  })

  it('have a name', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].avatar).toBe('/creature.jpg')
      done();
    })
  })
  it('characters have default xp of 0', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].xp).toBe(0)
      done();
    });
  })
  it('characters should start at lvl1', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].level).toBe(1)
      done();
    });
  })

  it('characters should 10 distributed points', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].attack).toBe(5)
      expect(characters[0].defence).toBe(5)
      done();
    });
  })

  it('characters should have 100hp', function(done) {
    Character.find({ 'name' : 'Test Warrior' }, function(err, characters) {
      expect(characters.length).toBe(1)
      expect(characters[0].hp).toBe(100)
      done();
    });
  })
})
