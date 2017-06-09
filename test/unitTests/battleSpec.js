var Battle = require('../../src/models/Battle');

describe('Battle', function(){

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

  var battle = new Battle(player1, player2);

  it('battle has player one', function(){
    expect(battle.firstPlayer.name).toEqual("Roy the Bus Driver")
  })

  it('battle has player two', function(){
    expect(battle.secondPlayer.name).toEqual("Bob the Builder")
  })

  it('starts with first player', function(){
    expect(battle.turn).toEqual("player1")
  })

  it('outcome is null', function(){
    expect(battle.outcome).toEqual(null)
  })

})
