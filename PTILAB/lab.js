// Initialize variables
let points = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoClickerCost = 100;
let passiveIncome = 0;
let upgradeLevel = 0;
let upgradeCostMultiplier = 1.5;
let bonusClickerCost = 50;
let bonusClickerPower = 10;

// Update point display
function updatePoints() {
  document.getElementById("points").innerHTML = points.toFixed(0);
}

// Update click power display
function updateClickPower() {
  document.getElementById("clickPower").innerHTML = clickPower.toFixed(0);
}

// Update passive income display
function updatePassiveIncome() {
  document.getElementById("passiveIncome").innerHTML = passiveIncome.toFixed(1);
}

// Update upgrade cost display
function updateUpgradeCost() {
  document.getElementById("upgradeCost").innerHTML = upgradeCost.toFixed(0);
}

// Update bonus clicker cost display
function updateBonusClickerCost() {
  document.getElementById("bonusCost").innerHTML = bonusClickerCost.toFixed(0);
}

// Add points when click button is clicked
document.getElementById("clickButton").addEventListener("click", function() {
  points += clickPower;
  updatePoints();
});

// Add auto clicker when buy auto clicker button is clicked
document.getElementById("buyAutoClicker").addEventListener("click", function() {
  if (points >= autoClickerCost) {
    points -= autoClickerCost;
    passiveIncome += 0.1;
    updatePoints();
    updatePassiveIncome();
    autoClickerCost *= 1.5;
    document.getElementById("autoClickerCost").innerHTML = autoClickerCost.toFixed(0);
    setInterval(function() {
      points += passiveIncome;
      updatePoints();
    }, 1000);
  }
});

// Upgrade click power when upgrade button is clicked
document.getElementById("upgradeButton").addEventListener("click", function() {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    clickPower += 1;
    upgradeCost *= upgradeCostMultiplier;
    upgradeLevel++;
    updatePoints();
    updateClickPower();
    updateUpgradeCost();
    document.getElementById("upgradeLevel").innerHTML = upgradeLevel;
  }
});

// Buy bonus clicker when bonus button is clicked
document.getElementById("bonusButton").addEventListener("click", function() {
  if (points >= bonusClickerCost) {
    points -= bonusClickerCost;
    clickPower += bonusClickerPower;
    bonusClickerCost *= upgradeCostMultiplier;
    updatePoints();
    updateClickPower();
    updateBonusClickerCost();
  }
});

// Update the game every second
setInterval(function() {
  points += passiveIncome;
  updatePoints();
}, 1000);
