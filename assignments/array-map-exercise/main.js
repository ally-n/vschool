
//   1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    return arr.map(num=> num * 2);
}
console.log(doubleNumbers([2, 5, 100]));
  
// 2) Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.map(num=> num.toString())
}
console.log(stringItUp([2, 5, 100]));

// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(name=> name.charAt(0).toUpperCase() + name.substring(1).toLowerCase())
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// 4) Make an array of strings of the names

function namesOnly(arr){
    return arr.map(names=> names.name)
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    return arr.map(matrix=> {
        if (matrix.age > 18) {
        return matrix.name + " can go to The Matrix! "
    } else {
        return matrix.name + " can't go to The Matrix :( "
    }})
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
["Angelina Jolie can go to The Matrix", 
"Eric Jones is under age!!", 
"Paris Hilton is under age!!", 
"Kayne West is under age!!", 
"Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
    return arr.map(dom=> {
        return "<h1>" + dom.name + "</h1>" + "<h2>" + dom.age + "</h2>"
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

["<h1>Angelina Jolie</h1><h2>80</h2>", 
"<h1>Eric Jones</h1><h2>2</h2>", 
"<h1>Paris Hilton</h1><h2>5</h2>", 
"<h1>Kayne West</h1><h2>16</h2>", 
"<h1>Bob Ziroll</h1><h2>100</h2>"]