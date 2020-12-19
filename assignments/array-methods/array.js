var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
var orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
var vegArray = vegetables.length
vegetables.push(vegArray)
var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
var lastArray = food.join()

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(food)
console.log(lastArray)



