var EnemyAttack = function(battle){
  this.attacker = battle.secondPlayer
  this.defender = battle.firstPlayer
  var hit = (this.attacker.attack-(this.defender.defence/3).toFixed(0))
  var chance = Math.floor((Math.random() * 10) +1)
  if (chance >= 10) {
    hit = (hit + chance + 20)
    this.defender.hp -= hit
    this.outcome = 'Your Opponent Got A Critical Hit! ' + hit
  } else if (chance <= 2) {
    this.outcome = 'Your Opponent Missed!'
  } else {
    hit = (hit + chance)
    this.defender.hp -= hit
    this.outcome = 'Your Opponent Got A Hit! ' + hit
  }
  battle.turn = 'player1'
};

module.exports = EnemyAttack;
