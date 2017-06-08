var EndGame = function(battle){
  if(battle.secondPlayer.hp <= 0){
    battle.gameOver = true; battle.outcome = 'won'
  }else if(battle.firstPlayer.hp <= 0) {
    battle.gameOver = true; battle.outcome = 'lost'
  }
}
module.exports = EndGame;
