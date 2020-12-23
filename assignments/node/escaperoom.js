const readline = require("readline-sync");
const name = readline.question("What is your name? ");
decision = readline.questionInt('Type the number of the option you want to do. 1: Put hand in the hole. 2. Find the key. 3. Open the door. ');
let winGame;
let decision2;

if (decision === 1) {
    console.log('Sorry, you lost!')
}


if (decision === 2) {
    console.log("What should you do with the key?")
    winGame = readline.questionInt('Type the number of the option you want to do. 1: Put hand in the hole. 2. Open the door. ');
}


if (decision === 3) {
    console.log("Wait, you need a key!")
    decision2 = readline.questionInt('Type the number of the option you want to do. 1: Put hand in the hole. 2. Find the key. ');
}

if (winGame === 1) {
    console.log('Sorry, you lost!')
}

if (winGame === 2) {
    console.log('Congratulations! You have escaped!')
}

if (decision2 === 1) {
    console.log('Sorry, you lost!')
}

if (decision2 === 2) {
    console.log("What should you do with the key?")
    winGame = readline.questionInt('Type the number of the option you want to do. 1: Put hand in the hole. 2. Open the door. ');
}


