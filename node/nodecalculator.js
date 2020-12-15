var readlineSync = require('readline-sync');

let num1 = readlineSync.questionInt('Please enter your first number. ');

let num2 = readlineSync.questionInt('Please enter your second number. ');

readlineSync.setDefaultOptions({ limit: ['add', 'subtract', 'multiply', 'divide'] });

let operation = readlineSync.question('Please choose one: add, subtract, multiply, divide. ');

let result;

switch (operation) {
    case 'add':
        result = add(num1, num2);
        break;

    case 'subtract':
        result = subtract(num1, num2);
        break;

    case 'multiply':
        result = multiply(num1, num2);
        break;

    case 'divide':
        result = divide(num1, num2);
        break;
}

console.log('The result is ' + result);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}