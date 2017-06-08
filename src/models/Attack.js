var Attack = function(attacker, defender){
  var hit = (attacker.attack-(defender.defence/3).toFixed(0))
  var chance = Math.floor((Math.random() * 10) +1)
  if (chance >= 9) {
    hit = (hit + chance + 20)
    defender.hp -= hit
    this.outcome = 'Critical Hit! ' + hit
  } else if (chance == 1) {
    this.outcome = 'Missed!'
  } else {
    hit = (hit + chance)
    defender.hp -= hit
    this.outcome = 'Good hit! ' + hit
  }
};

module.exports = Attack;
