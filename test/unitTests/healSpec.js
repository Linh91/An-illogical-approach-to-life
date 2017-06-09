var heal = require('../../src/models/Heal');

describe('Heal', function(){

  var battle = {
    firstPlayer: 'player1',
    secondPlayer: 'player2',
    turn: 'player1',
    outcome: null
  }

  it('player can attack', function(){
    heal(battle);
    expect(battle.turn).toBe('player2')
    expect(battle.outcome).notNull
  })
})
