
// var playerName ='Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName);
console.log(playerHealth, playerAttack, playerMoney);
console.log("You can put regular sentences in these.");

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
};

// ask player if they'd like to fight or run
var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//if players to fight, fight
if (promptFight === "flight" || promotFight ==="FIGHT") {
    //remove enemy's helathy by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName + " now has " + enemyHealth + " health reamining. "
    )

    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName +'had died!');
    } else {
        window.alert(enemyName + " still has " + enemyealth + "health left.");
    }

    // if player choses to skp
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player want to skip
    var confirmSkip = window.Confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtrack money from playerMoney for skipping
        playerMoney = playerMoney -2; 
    }
    // if no (flase< ask qustion again by runnin fight() again
    else {
        window.alert("You need to pick a valid option. Try again!");
    })
}

//run figh function to star game

fight();