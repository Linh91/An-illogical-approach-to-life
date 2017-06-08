var Rewards = function(character) {
  this.attackReward(character);
  this.defenceReward(character);
  this.xpReward(character);
}

Rewards.prototype.attackReward = function(character) {
  this.attackOutcome = Math.floor((Math.random() * 3) +1)
  character.attack += this.attackOutcome
}

Rewards.prototype.defenceReward = function(character) {
  this.defenceOutcome = Math.floor((Math.random() * 3) +1)
  character.defence += this.defenceOutcome
}

Rewards.prototype.xpReward = function(character) {
  this.xpOutcome = Math.floor((Math.random() * 30) +1)
  character.xp += this.xpOutcome
}

module.exports = Rewards;
