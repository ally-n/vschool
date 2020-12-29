const readlineSync = require('readline-sync');
let gameOver = false;
let hasWon = false;
let userHealth = 150;
let inventory = [];
let enemies = [];

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
const userName = readlineSync.question('I heard you have a nickname you want us to call you. What is it? ')
console.log('Hi ' + userName + '! Let us begin.');
console.log('Shall we see what miscreants stand in our journey to the Seeing Stone? ')
explore()
function explore () {
    while (!gameOver) {
        readlineSync.setDefaultOptions({limit: ['w', 'p', 'print', 'q']})
        let choice = readlineSync.question('Press the w key to begin walking to explore the planet. Press the p key or type \'print\' to see what items you have collected and check your status. If you want to be rid of this adventure, press q to quit. ')
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
function enemyAppears () {
    let num = Math.floor(Math.random()*4)
    if (num === 3) {
        return true;
    } else {
        return false;
    }
}
function battle () {
    let randomEnemy = enemies[Math.floor(Math.random()*enemies.length)];
    let attack = Math.floor(Math.random() * (randomEnemy.maxDamage - randomEnemy.minDamage)) + randomEnemy.minDamage;
    let enemyAttack = Math.floor(Math.random()* (randomEnemy.maxDamage - randomEnemy.minDamage));
    console.log('Beware- it is ' + randomEnemy.enemyName + '!')
            while (userHealth >= 0 || randomEnemy.HP >= 0) {
            readlineSync.setDefaultOptions({limit: ['f', 'r', 'q']})  
            let runFight = readlineSync.question('Are you going to Force Push (f) or run (r)? Press q to quit. ')
            if (runFight === 'q') {
                quit()
            } else if (runFight === 'f') {
                fight(randomEnemy)
            } else if (runFight === 'r') {
                run()
        }
}

function fight(obj) {
    console.log('You use the force! ');
    obj.HP = obj.HP - attack
    console.log('You dealt ' + attack + ' points of damage! ' + obj.enemyName + ' currently has ' + obj.HP+ ' health points left.')
    userHealth = userHealth - enemyAttack 
    if (obj.HP <= 0) {
        inventory.push(obj.item)
        console.log('You defeated ' + obj.enemyName + '. Take a look at your inventory to see the new item added! ')
        console.log(inventory)
        console.log('Let\'s continue on your journey to the Seeing Stone.')
        enemies.splice(enemies.indexOf(obj), 1)
        explore() 
    } 
    console.log('Watch out for an attack! Oh no- ' + obj.enemyName + ' dealt ' + enemyAttack + ' points of damage to you! You currently have ' + userHealth + ' health points left.')
    if (userHealth <= 0) {
        console.log('You have died. The force can\'t save you now. BYE. ')
    }
    if (enemies.length = 0) {
        hasWon = true;
    }
}
function run() {
    let escape = Math.floor(Math.random()*2)
    if (escape === 1) {
        console.log('You\'ve escaped! Continue on your journey. ');
        explore()
    } else if (escape >= 0.5) {
        console.log('Oh no,' + userName + ', you weren\'t quite fast enough. They\'re about to attack! Are you going to defend yourself?');
    }   
}
function quit() {
    console.log('May the force be with you. ')
    gameOver = true;
}

// if (gameOver = true) {
//     console.log('HEY LOSER- I CAN\'T BELIEVE YOU LOST ')
//     console.log('GAME OVER')
// }

if (hasWon = true) {
    console.log('We\'ve arrived to the Seeing Stone! Congratulations. I wish you luck on your adventure.')
    console.log('GAME OVER')
}
}

// Issues
// When line 34-35 aren't commented out, it prints the 'p' command even if I hit 'w'
// Lines 69-72 in Battle Function doesn't quit/End Game like it does in the Explore Function (lines 31-33- but those lines ONLY work the first time it runs. Not after you finish a battle loop and go back to the explore loop.)
// Tried to create a quit function to see if that would help, but it still doesn't work. 
// Created a selectEnemy function in order to be able to delete it, but it doesn't work either. 
