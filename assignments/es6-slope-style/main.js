// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]));

// Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};
function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem] = items; 
    return firstItem
}
console.log(returnFirst(["1", "2", "3", "4", "5"]))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
}

console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...animalArray) {  
  let newArray = [];
  animalArray.forEach(arr => {
    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i])
    }
  })
return newArray
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// Make the code more ES6xy

function product(...numbers) {  
  // var numbers = [];
  return numbers.reduce((acc, number) =>{acc * number}, 1)
}

console.log(product(2, 3, 5))

// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }

// // Write some destructuring code to help this function out. Use object literals to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
// //  {firstName: "Frank", lastName: "Peterson"},
// //  {firstName: "Suzy", lastName: "Degual"},
// //  {firstName: "Liza", lastName: "Jones"},
// //]