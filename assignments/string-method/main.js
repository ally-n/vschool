function capitalizeAndLowercase(str) {
    var upper = str.toUpperCase()
    var lower = str.toLowerCase()
    return upper + lower
}
console.log(capitalizeAndLowercase("hElLo"))

function findMiddleIndex(str) {
    var middleIndex = (str.length / 2)
    var halveIt = (Math.floor(middleIndex))
    return halveIt
}
console.log(findMiddleIndex("greetings"))

function returnFirstHalf(str) {
    var halfway = findMiddleIndex(str)
    return str.slice(0, halfway)
}
console.log(returnFirstHalf("sunshine"))

function upperLower(str) {
    var halfway = findMiddleIndex(str)
    var firstHalf = str.toUpperCase().slice(0, halfway)
    var secondHalf = str.toLowerCase().slice(halfway, str.length)
    return firstHalf + secondHalf
}
console.log(upperLower("Hello World"))

