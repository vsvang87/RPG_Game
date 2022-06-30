function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}
//get percentage
const getPercentage = (remainingHealth, maximumHealth) => {
  return (100 * remainingHealth) / maximumHealth;
};
//place holder function
function getDicePlaceHolderHtml(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => {
      return `<div class="placeholder-dice"></div>`;
    })
    .join("");
}

export { getDiceRollArray, getDicePlaceHolderHtml, getPercentage };
