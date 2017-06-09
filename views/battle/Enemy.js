var Bob = function(){
  this.attack = 3
  this.defence = 7
  this.hp = 100
  this.name = "Bob the Builder"
};

var Balthazar = function(){
  this.attack = 10
  this.defence = 3
  this.hp = 100
  this.name = "Balthazar"
};

var Enemies = [
  bob = new Bob(),
  balth = new Balthazar()
]
module.exports = Enemies;
