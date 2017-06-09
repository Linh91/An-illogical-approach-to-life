var endGame = require('../../src/models/Endgame');

describe('EndGame', function(){

  var player1 = {
    hp: 1
  };

  var player2 = {
    hp: 1
  };

  var battle = {
    firstPlayer: player1,
    secondPlayer: player2,
    outcome: null
  }

  it('player can win', function(){
    player1.hp = 1;
    player2.hp = 0;
    endGame(battle);
    expect(battle.gameOver).toBe(true);
    expect(battle.outcome).toBe('won');
  })

  it('player can lose', function(){
    player1.hp = 0;
    player2.hp = 1;
    endGame(battle);
    expect(battle.gameOver).toBe(true)
    expect(battle.outcome).toBe('lost')
  })
})
