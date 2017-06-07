
    var $ = require("jquery");


var Battle = function(player1, player2, window){
  this.firstPlayer = player1
  this.secondPlayer = player2
  this.gameOver = false
  this.outcome = null
}

Battle.prototype.attack = function(attacker, defender){
  defender.hp -= (attacker.attack-(defender.defence/3).toFixed(0))
  this.checkForEndGame();
};

Battle.prototype.checkForEndGame = function(){
  if(this.secondPlayer.hp <= 0){
    this.gameOver = true; this.outcome = 'won'
  }else if(this.firstPlayer.hp <= 0) {
    this.gameOver = true; this.outcome = 'lost'
  }
}


module.exports = Battle;
