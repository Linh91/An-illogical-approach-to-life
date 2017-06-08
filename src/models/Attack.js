var Attack = function(attacker, defender){
  console.log(this)
  var hit = (attacker.attack-(defender.defence/3).toFixed(0))
  defender.hp -= hit
};

module.exports = Attack;
