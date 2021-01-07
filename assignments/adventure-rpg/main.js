const readlineSync = require('readline-sync');
const chalk = require('chalk');
let gameOver = false;
let hasWon = false;
let userHealth = 200;
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
enemies.push(new Enemy("a Dark Trooper", 70, 90, 90, "Beskar Staff"));
enemies.push(new Enemy("Moff Gideon", 50, 70, 130, "Dark Saber"));
// Game Start
console.log(chalk.blue('Grogu! I am so glad you have come all this way to Tython. We need to connect you with a Jedi Master!'))
const userName = readlineSync.question('I heard you have a nickname you want us to call you. What is it? ')
console.log(chalk.bgBlue('Hi ' + userName + '! Let us begin.'));
console.log('Shall we see what miscreants stand in our journey to the Seeing Stone? ')
while (!gameOver && !hasWon) {
    readlineSync.setDefaultOptions({limit: ['w', 'p', 'print', 'q']})
    let choice = readlineSync.question('Press the w key to begin walking to explore the planet. Press the p key or type \'print\' to see what items you have collected and check your status. If you want to be rid of this adventure, press q to quit. ')
    if (choice === 'q') {
        console.log('May the force be with you. Goodbye. ')
        gameOver = true 
    }else if (choice === 'p' || choice === 'print'){
        console.log(chalk.magenta(userName + ' has ' + userHealth + ' HP, and the following items: ' + inventory))
    } else if (choice === 'w') {
        explore()
    }
}
function explore() {
    let num = Math.floor(Math.random()*4)
    if (num === 3) {
        battle()
    } else {
        console.log(chalk.yellow("Walking..."))
    }
}
function enemySelector() {
    let randomEnemy = enemies[Math.floor(Math.random()*enemies.length)];
    return randomEnemy

}
function battle () {
    const currentEnemy = enemySelector()
    console.log(chalk.red('Beware- it is ' + currentEnemy.enemyName + '!'))
    readlineSync.setDefaultOptions({limit: ['f', 'r', 'q']})  
    let runFight = readlineSync.question('Are you going to Fight (f) or Run (r)? Press q to quit. ')
    if (runFight === 'q') {
        quit()
    } else if (runFight === 'f') {
        fight(currentEnemy)
    } else if (runFight === 'r') {
        run()
    }
}
function fight(obj) {
    let attack = Math.floor(Math.random() * (obj.maxDamage - obj.minDamage)) + obj.minDamage;
    let enemyAttack = Math.floor(Math.random()* (obj.maxDamage - obj.minDamage));
    while (userHealth > 0 && obj.HP > 0) {
        let runFight = readlineSync.keyIn('BATTLE! Are you going to Force Push (f) or Run (r)? ', {limit: 'fr'})  
        if (runFight === 'f') {
            console.log(chalk.blue('You use the force! '));
            obj.HP = obj.HP - attack
            console.log('You dealt ' + attack + ' points of damage! ' + obj.enemyName + ' currently has ' + obj.HP+ ' health points left.')
            userHealth = userHealth - enemyAttack 
            console.log(chalk.red('Watch out for an attack! Oh no- ' + obj.enemyName + ' dealt ' + enemyAttack + ' points of damage to you! You currently have ' + userHealth + ' health points left.'))
            if (obj.HP <= 0) {
                inventory.push(obj.item)
                console.log(chalk.blue('You defeated ' + obj.enemyName + '. Take a look at your inventory to see the new item added! '))
                console.log(inventory)
                console.log('Let\'s continue on your journey to the Seeing Stone.')
                enemies.splice(enemies.findIndex(Enemy => Enemy.enemyName === obj.enemyName), 1)        
            } 
            if (userHealth <= 0) {
                console.log(chalk.red('You have died. The force can\'t save you now. BYE. '))
                gameOver = true
            }
            if (enemies.length === 0) {
                hasWon = true;
                console.log(chalk.green('We\'ve arrived to the Seeing Stone! Congratulations. '))
                console.log('GAME OVER')
            }
        } else if (runFight === 'r') {
            userHealth = 0
            gameOver = true
            console.log(chalk.red('Umm... you aren\'t supposed to run from a fight. YOU LOSE. '))
        }
    }
}
function run() {
    let escape = Math.floor(Math.random()*2)
    const currentEnemy = enemySelector()
    if (escape === 1) {
        console.log(chalk.blue('You\'ve escaped! Continue on your journey. '))
    } else {
        console.log(chalk.red('Oh no,' + userName + ', you weren\'t quite fast enough. They\'re about to attack! Are you going to defend yourself?'))
        fight(currentEnemy)
    }   
}
function quit() {
    console.log(chalk.red('May the force be with you, ya quitter. '))
    gameOver = true;
}
