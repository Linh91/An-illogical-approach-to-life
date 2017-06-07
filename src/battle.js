function Battle(player1, player2){
  this.firstPlayer = player1
  this.secondPlayer = player2
  this.gameOver = false
  this.outcome = null
}

Battle.prototype.attack = function(player1, player2){
  player2.hp-= (player1.attack-(player2.defence/3).toFixed(0))
  checkForEndGame(player1, player2)
};

function checkForEndGame(firstPlayer, secondPlayer){
  if(secondPlayer.hp <= 0){
    battle.gameOver = true; battle.outcome = 'won'
  } else if(firstPlayer.hp <= 0) {
    battle.gameOver = true; battle.outcome = 'lost'
  }
}
