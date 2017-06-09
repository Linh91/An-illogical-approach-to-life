var Enemies = require('../../src/models/Enemy');

describe('Enemies', function() {

  it('is created', function() {
    var testEnemies = Enemies;
    expect(testEnemies.length).toBe(8)
    expect(testEnemies[0].name).toBe('Bearon')
    expect(testEnemies[2].hp).toBe(100)
    expect(testEnemies[3].attack).toBe(25)
    expect(testEnemies[6].defence).toBe(213)
  });
});
