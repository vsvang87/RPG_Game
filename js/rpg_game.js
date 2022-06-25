//import from module
import characterData from "./data.js";
import Character from "./Character.js";

//attack function
function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  //check to see if character is dead
  if (wizard.dead || orc.dead) {
    endGame();
  }
}
//render function
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}
//end game
function endGame() {
  //message if wizard or orc is dead
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "Both are Dead, Tie Game"
      : wizard.health > 0
      ? "Wizard Wins"
      : "Orc Wins";
  //emoji
  const endEmoji = wizard.health > 0 ? "🧙‍♂️" : "☠️";
  document.body.innerHTML = `<div class="end-game">
  <h2>Game Over</h2>
  <h3>${endMessage}</h3>
  <p class="end-emoji">${endEmoji}</p>
</div>`;
}

//grabbing the attack button
document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
