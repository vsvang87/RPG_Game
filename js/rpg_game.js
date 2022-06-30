//import from module
import characterData from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "dragon", "goblin"];

function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack() {
  wizard.getDiceHtml();
  monster.getDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  render();

  /*change the code below this line*/
  if (wizard.dead) {
    endGame();
  } else if (monster.dead) {
    if (monstersArray.length > 0) {
      //pause for 1.5 sec between monster dying
      setTimeout(() => {
        monster = getNewMonster();
        render();
      }, 1500);
    } else {
      endGame();
    }
  }
}

function endGame() {
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Monsters Wins";

  const endEmoji = wizard.health > 0 ? "🧙‍♂️" : "☠️";
  //pause between the last monster or wizard dying
  setTimeout(() => {
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `;
  }, 1500);
}

document.getElementById("attack-button").addEventListener("click", attack);

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
