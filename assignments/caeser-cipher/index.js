var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const decode = (str, num) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    return str.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + num])
}

console.log(decode(input, shift))
