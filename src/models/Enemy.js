var Enemy1 = function(){
  this.attack = 3
  this.defence = 7
  this.hp = 100
  this.name = "Bearon"
  this.avatar = "baddie_sprite.png"
};

var Enemy2 = function(){
  this.attack = 11
  this.defence = 4
  this.hp = 100
  this.name = "Glalidric"
  this.avatar = "boss3.gif"
};

var Enemy3 = function(){
  this.attack = 18
  this.defence = 10
  this.hp = 100
  this.name = "Aziromech"
  this.avatar = "robot.gif"
};

var Enemy4 = function(){
  this.attack = 25
  this.defence = 30
  this.hp = 120
  this.name = "Nydekin"
  this.avatar = "robot.gif"
};

var Enemy5 = function(){
  this.attack = 45
  this.defence = 38
  this.hp = 120
  this.name = "Acirar"
  this.avatar = "robot.gif"
};
var Enemy6 = function(){
  this.attack = 120
  this.defence = 130
  this.hp = 120
  this.name = "Legeiria"
  this.avatar = "robot.gif"
};

var Enemies = [
  e1 = new Enemy1(),
  e2 = new Enemy2(),
  e3 = new Enemy3(),
  e4 = new Enemy4(),
  e5 = new Enemy5(),
  e6 = new Enemy6(),
]
module.exports = Enemies;
