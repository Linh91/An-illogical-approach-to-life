var enemyAttack = require('../../src/models/EnemyAttack');

describe('EnemyAttack', function(){

  var player1 = {
    name: "Roy the Bus Driver",
    xp: 0,
    attack: 9,
    defence: 1,
    level: 1,
    hp: 20
  };

  var player2 = {
    name: "Bob the Builder",
    xp: 0,
    attack: 2,
    defence: 8,
    level: 1,
    hp: 20
  };

  var battle = {
    firstPlayer: player1,
    secondPlayer: player2,
    turn: 'player2',
    outcome: null
  }

  it('enemy can attack', function(){
    enemyAttack(battle);
    expect(battle.turn).toBe('player1')
    expect(battle.outcome).notNull
  })
})
