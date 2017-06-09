var attack = require('../../src/models/Attack');

describe('Attack', function(){

  var battle = {
    firstPlayer: 'player1',
    secondPlayer: 'player2',
    turn: 'player1',
    outcome: null
  }

  it('player can attack', function(){
    attack(battle);
    expect(battle.turn).toBe('player2')
    expect(battle.outcome).notNull
  })
})
