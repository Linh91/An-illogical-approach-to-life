var Enemy = function(){
  this.attack = Math.floor((Math.random() * 10) +1)
  this.defence = Math.floor((Math.random() * 10) +1)
  this.hp = 100
  this.name = "Darth Vadar"
};

module.exports = Enemy;
