// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...str) {  
    return 
}

// function maxNumber(...nums){
//     console.log(nums)


collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
    return {}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
//=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }

// Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence(_________){
  return `We're going to have a good time in ${location} for ${duration}`
}

// Use destructuring to make this code ES6:

function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
}

returnFavorites(favoriteActivities)

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals() {  
 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function product(a, b, c, d, e) {  
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function unshift(array, a, b, c, d, e) {  
  return [a, b, c, d, e].concat(array);
}

// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]