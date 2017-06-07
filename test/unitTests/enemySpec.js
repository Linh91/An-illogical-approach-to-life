var Enemy = require('../../src/models/Enemy');

describe('Enemy', function() {
  var testEnemy = new Enemy();

  it('is created', function() {
    expect(testEnemy.name).toBe("Darth Vadar")
    expect(testEnemy.hp).toBe(100)
    expect(testEnemy.defence).toBeLessThan(11)
    expect(testEnemy.attack).toBeLessThan(11)
  });
});
