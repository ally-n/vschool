// Replace all the vars with let and const. 

const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Re-write this .map() using an arrow function:

// const carrots = ["bright orange", "ripe", "rotten"]

// var mapVegetables = (arr) => arr.map(carrot) =>  type: "carrot", name: carrot;

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

// Re-write the following functions to be arrow functions:

var doMathSum = (a, b) => a + b;
console.log(doMathSum(4, 5))

var produceProduct = (a, b) => a * b;
console.log(produceProduct(3, 4))

// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Extra Credit
// Use template literals to build the string

function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName} , how does it feel to be ${age}?`;
}
console.log(printString("Kat", "Stark", 40))

// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")
 }
console.log(filterForDogs(animals))

//  Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

function welcomeMessage (location, name) {
    return `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything. `
}
console.log(welcomeMessage("Hawaii", "Janice"))

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 