import {
  getDiceRollArray,
  getDicePlaceHolderHtml,
  getPercentage,
} from "./utils.js";

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceHolderHtml(this.diceCount);

  //max health
  this.maxHealth = this.health;

  //get dice html
  this.getDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };
  //take damage
  this.takeDamage = (attackScoreArray) => {
    const totalAttackScore = attackScoreArray.reduce(
      (total, num) => total + num
    );

    //health decrement when attacked
    this.health -= totalAttackScore;

    //character stays at zero when health reaches zero
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };
  //health bar html
  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth);
    return `<div class="health-bar-outer">
    <div class="health-bar-inner ${
      percent < 28 ? "danger" : ""
    }" style="width: ${percent}%"></div>
    </div>`;
  };
  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount } = this;
    //health bar
    const healthBar = this.getHealthBarHtml();
    return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`;
  };
}

export default Character;
