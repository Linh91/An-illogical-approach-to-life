var Attack = function(battle){
  this.attacker = battle.firstPlayer
  this.defender = battle.secondPlayer
  var hit = (this.attacker.attack-(this.defender.defence/3).toFixed(0))
  if (hit < 0) { hit = 0 }
  var chance = Math.floor((Math.random() * 10) +1)
  if (chance >= 9) {
    hit = (hit + chance + 20)
    this.defender.hp -= hit
    this.outcome = 'Critical Hit! ' + hit + ' pts'
  } else if (chance == 1) {
    this.outcome = 'You Missed!'
  } else {
    hit = (hit + chance)
    this.defender.hp -= hit
    this.outcome = 'Good hit! ' + hit + ' pts'
  }
  battle.turn = 'player2'
};

module.exports = Attack;
