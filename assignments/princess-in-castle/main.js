const readlineSync = require('readline-sync');
const chalk = require('chalk');
let statusOptions = ["Powered Up", "Big", "Small", "Dead"];
nameOptions = ["Mario", "Luigi"];
class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = statusOptions[2];
        this.hasStar = false;
        this.isAlive = true
    }
    setName(name){
        if (name === 0) {
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
    gotHit() {
        console.log(chalk.bgBlue(`You got hit! Be more careful out here...`))
        switch(this.status) {
            case "Powered Up":
                this.status = "Big"
                break;
            case "Big":
                this.status = "Small"
                break;
             case "Small":
                this.status = "Dead"
                gameActive = false
                console.log(chalk.bgRedBright(`I'm sorry but you've lost the game.`))
                break;
        }
    }
    gotPowerUp(){
        console.log(chalk.bgBlue(`You've powered up!`))
        switch(this.status) {
            case "Powered Up":
                this.hasStar = true
                console.log(`Wow- you got a STAR!`)
                break;
            case "Big":
                this.status = "Powered Up"
                break;
             case "Small":
                this.status = "Big"
                break;
        }
    }
    addCoin(){
        console.log(chalk.bgBlue(`Wahoo! Here's a coin for you.`))
        this.totalCoins += 1
    }
    print(){
        console.log(chalk.yellow(
            `
            Name: ${this.name} 
            Status: ${this.status}
            Coins: ${this.totalCoins}
            Has Star: ${this.hasStar}`))
    }
}
// Game Start
const newPlayer = new Player
console.log('Which player would you like to be?')
const name = readlineSync.keyInSelect(nameOptions, 'Pick one. ')
console.log(chalk.bgBlue(`Okay ${nameOptions[name]}, let's get started. `))
newPlayer.setName(name)
newPlayer.print()
let gameActive = () =>  {
    min = Math.ceil(0);
    max = Math.floor(2);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNum === 0) {
        newPlayer.gotHit()
    } else if (randomNum === 1) {
        newPlayer.gotPowerUp()
    } else if (randomNum === 2) {
        newPlayer.addCoin()
    }
    newPlayer.print()
    if(gameActive === false){
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(gameActive, 1000);
