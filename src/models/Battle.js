var Battle = function(player1, player2){
  this.firstPlayer = player1
  this.secondPlayer = player2
  this.gameOver = false
  this.outcome = null
}



Battle.prototype.checkForEndGame = function(){
  if(this.secondPlayer.hp <= 0){
    this.gameOver = true; this.outcome = 'won'
  }else if(this.firstPlayer.hp <= 0) {
    this.gameOver = true; this.outcome = 'lost'
  }
}

module.exports = Battle;
