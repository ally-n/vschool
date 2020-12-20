var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var splitAlphabet = alphabet.toUpperCase().split("");
    var result = [];

    for (var i = 0; i < people.length; i++) {
        let names = people[i];
        result.push(names)
        for (var j = 0; j < splitAlphabet.length; j++) {
            result.push(splitAlphabet[j]);
        }
    }
    return result;
}
console.log(forception(people, alphabet));