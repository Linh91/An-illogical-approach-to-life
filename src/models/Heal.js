var Heal = function(battle){
  var chance = Math.floor((Math.random() * 10) +1)
  if (chance >= 9) {
    var heal = (chance + 20)
    battle.firstPlayer.hp += heal
    this.outcome = 'Amazing Heal! ' + heal
  } else if (chance == 1) {
    this.outcome = 'Missed!'
  } else {
    heal = chance
    battle.firstPlayer.hp += heal
    this.outcome = 'Good Heal! ' + heal
  }
  battle.turn = 'player2'
};

module.exports = Heal;
