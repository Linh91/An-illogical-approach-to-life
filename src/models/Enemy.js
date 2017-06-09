var Enemy1 = function(){
  this.attack = 3
  this.defence = 7
  this.hp = 100
  this.name = "Bearon"
  this.avatar = "theeye.gif"
};

var Enemy2 = function(){
  this.attack = 11
  this.defence = 4
  this.hp = 100
  this.name = "Glalidric"
  this.avatar = "baddie_sprite.png"
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
  this.hp = 100
  this.name = "Nydekin"
  this.avatar = "boss3.gif"
};

var Enemy5 = function(){
  this.attack = 45
  this.defence = 38
  this.hp = 100
  this.name = "Acirar"
  this.avatar = "crabaroony.gif"
};

var Enemy6 = function(){
  this.attack = 120
  this.defence = 130
  this.hp = 100
  this.name = "Legeiria"
  this.avatar = "dragoon.gif"
};

var Enemy7 = function(){
  this.attack = 197
  this.defence = 213
  this.hp = 100
  this.name = "Machinera"
  this.avatar = "roboto.gif"
};

var Enemy8 = function(){
  this.attack = 300
  this.defence = 300
  this.hp = 100
  this.name = "Alex Law - The Creator"
  this.avatar = "thebigboss.gif"
};

var Enemies = [
  e1 = new Enemy1(),
  e2 = new Enemy2(),
  e3 = new Enemy3(),
  e4 = new Enemy4(),
  e5 = new Enemy5(),
  e6 = new Enemy6(),
  e7 = new Enemy7(),
  e8 = new Enemy8()
]
module.exports = Enemies;
