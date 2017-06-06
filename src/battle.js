// Battle = (player1, player2) => {
//   this.firstPlayer = player1
//   this.secondPlayer = player2
// }

function Battle(player1, player2){
  this.firstPlayer = player1
  this.secondPlayer = player2
}

Battle.prototype.attack = function(player1, player2) {
  player2.hp-= player1.attack
};
