import { getDiceRollArray, getDicePlaceHolderHtml } from "./utils.js";

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceHolderHtml(this.diceCount);

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };
  //take damage
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, num) => {
      return total + num;
    });

    //health decrement when attacked
    this.health -= totalAttackScore;

    //character stays at zero when health reaches zero
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };
  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = this;

    return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`;
  };
}

export default Character;
