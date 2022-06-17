//get dice array
/*function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}
//get dice HTML function
function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map((num) => {
      return `<div class="dice">${num}</div>`;
    })
    .join("");
}

//hero object
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "/rpg_image/wizard.jpg",
  health: 60,

  diceCount: 3,
};

//monster object
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "/rpg_image/orc.jpg",
  health: 40,

  diceCount: 2,
};

//render function
function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data;
  const diceHTML = getDiceHtml(diceCount);

  document.getElementById(elementId).innerHTML = `
    <div class="character-card">
            <h4 class="name">${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b>${health}</b></p>
            <div class="dice-container">${diceHTML}</div>
        </div> 
    `;
}
renderCharacter(hero);
renderCharacter(monster);
*/

const hotel1 = {
  name: "Starfield",
  rooms: 30,
  stars: "⭐⭐⭐",
  costPerNightChildren: 150,
  costPerNightAdult: 250,
};
const hotel2 = {
  name: "Sandy Beach",
  rooms: 40,
  stars: "⭐⭐⭐⭐⭐",
  costPerNightChildren: 250,
  costPerNightAdult: 350,
};

function NationalParkHotels(data) {
  this.name = data.name;
  this.rooms = data.rooms;
  this.stars = data.stars;
  this.cost = data.cost;
  this.summariseHotel = function () {
    const totalCost =
      this.costPerNightChildren * 2 + this.costPerNightAdult * 2;
    console.log(
      `A one night at the ${hotel1.name} for two adults and two children costs a total of ${totalCost}.`
    );
  };
}
const starField = new NationalParkHotels(hotel1);
starField.summariseHotel();
