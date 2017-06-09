var Attack = function(battle){
  this.attacker = battle.firstPlayer
  this.defender = battle.secondPlayer
  var hit = (this.attacker.attack-(this.defender.defence/3).toFixed(0))
  var chance = Math.floor((Math.random() * 10) +1)
  if (chance >= 9) {
    hit = (hit + chance + 20)
    this.defender.hp -= hit
    this.outcome = 'Critical Hit! ' + hit
  } else if (chance == 1) {
    this.outcome = 'Missed!'
  } else {
    hit = (hit + chance)
    this.defender.hp -= hit
    this.outcome = 'Good hit! ' + hit
  }
  battle.turn = 'player2'
};
