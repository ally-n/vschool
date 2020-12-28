const readlineSync = require('readline-sync');
let gameOver = false;
let userHealth = 150;
let inventory = [];
let enemies = [];

// Enemies Array
function Enemy (enemyName, minDamage, maxDamage, HP, item) {
    this.enemyName = enemyName;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.HP = HP;
    this.item = item;
    this.isDefeated = false;
}

enemies.push(new Enemy("pack of Krykna", 40, 70, 50, "Frog Egg"));
enemies.push(new Enemy("a Storm Trooper", 60, 90, 70, "Gear Knob"));
enemies.push(new Enemy("a Dark Trooper", 70, 110, 90, "Beskar Staff"));
enemies.push(new Enemy("Moff Gideon", 50, 160, 150, "Dark Saber"));


// Game Start
console.log('Grogu! I am so glad you have come all this way to Tython. We need to connect you with a Jedi Master!')
const userName = readlineSync.question('I heard you have a nickname you want us to call you. What is it? ');
console.log('Hi ' + userName + '! Let us begin.');
console.log('GAME INSTRUCTIONS HERE')
console.log('Shall we see what miscreants stand in our journey to the Seeing Stone? ')
explore()

// Walk, Print, Quit 
function explore () {
    while (!gameOver) {
        readlineSync.setDefaultOptions({limit: ['w', 'p', 'print', 'q']})
        let choice = readlineSync.question('Press the w key to begin walking to explore the planet. Press the p key or type \'print\' to see what items you have collected and check your status. If you want to be rid of this adventure, press q to quit. ');
        if (choice === 'q') {
            console.log('May the force be with you. Goodbye. ')
            gameOver = true 
        // }else if (choice === 'p' || 'print'){
        //     console.log(userName + ' has ' + userHealth + ' HP, and the following items:' + inventory)
        } else if (choice === 'w') {
            console.log('Walking...')
            if (enemyAppears) {
                console.log('Oh no! Be careful ' + userName + ', an enemy has appeared! ')
                    battle()
            }
        }
    }
}

// Whether or not Enemy Appears
function enemyAppears () {
    let num = Math.random();
    if (num < 0.25) {
        return true;
    } else {
        return false;
    }
}

//Battle- Force Push or Run- nested while loops
function battle () {
        while (!gameOver) {
        let randomEnemy = enemies[Math.floor(Math.random()*enemies.length)];
        console.log('Beware- it is ' + randomEnemy.enemyName + '!');
            while (userHealth >= 0 || randomEnemy.HP >= 0) {
            readlineSync.setDefaultOptions({limit: ['f', 'r', 'q']})  
            let runFight = readlineSync.question('Are you going to Force Push (f) or run (r)? Press q to quit. ');
        // Choose to Quit- NOT WORKING RIGHT NOW
            if (runFight === 'q') {
                console.log('May the force be with you. ');
                gameOver = true;
        // Choose to Fight
            } else if (runFight === 'f') {
               console.log('You use the force! ');
                let attack = Math.floor(Math.random() * (randomEnemy.maxDamage - randomEnemy.minDamage)) + randomEnemy.minDamage;
                let enemyCurrentHP = randomEnemy.HP - attack
                console.log('You dealt ' + attack + ' points of damage! ' + randomEnemy.enemyName + ' currently has ' + enemyCurrentHP + ' health points left.')
                let enemyAttack = Math.floor(Math.random()* (randomEnemy.maxDamage - randomEnemy.minDamage));
                let userCurrentHP = userHealth - enemyAttack 
                if (enemyCurrentHP <= 0) {
                    inventory.push(randomEnemy.item)
                    console.log('You defeated ' + randomEnemy.enemyName + '. Take a look at your inventory to see the new item added! ')
                    console.log(inventory)
                    console.log('Let\'s continue on your journey to the Seeing Stone.')
                    delete randomEnemy
                    explore() }
                console.log('Watch out for an attack! Oh no- ' + randomEnemy.enemyName + ' dealt ' + enemyAttack + ' points of damage to you! You currently have ' + userCurrentHP + ' health points left.')
                if (userCurrentHP <= 0) {
                    gameOver = true; }
        // Choose to Run
            } else if (runFight === 'r') {
                let escape = Math.random();
                if (escape < 0.5) {
                    console.log('You\'ve escaped! Continue on your journey. ');
                    explore()
                } else if (escape >= 0.5) {
                    console.log('Oh no,' + userName + ', you weren\'t quite fast enough. They\'re about to attack! Are you going to defend yourself?');
                    // NEED TO FINISH THIS PART
            }
            
        }
        

}



// GAME OVER- LOSE (will change later)
if (gameOver = true) {
    console.log('HEY LOSER- I CAN\'T BELIEVE YOU LOST ')
}
}
}



// Issues
// When line 39-40 isn't commented out, it prints the 'p' command even if I hit w 
// Lines 76-90- Need randomEnemy.HP and userHealth to get smaller and smaller instead of starting over each time.
        // Do I need to run a for loop with an i variable or something like that?
// Lines 69-72 in Battle Function doesn't quit/End Game like it does in the Explore Function 
// Doesn't delete enemy after being defeated
