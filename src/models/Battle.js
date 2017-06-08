var Battle = function(player1, player2){
  this.firstPlayer = player1
  this.secondPlayer = player2
  this.turn = 'player1'
  this.outcome = null
}

module.exports = Battle;
