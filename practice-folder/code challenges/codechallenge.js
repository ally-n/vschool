// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input  : arr[] = {100, 200, 300, 400}
//          k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
//          k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23}
// of size 4.

// Input  : arr[] = {2, 3}
//          k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole
// array is 2.

// Step 1: Understand the question- It wants me to take k amount of the largest
//numbers in an array and add them

//Step 2: Plan it Out- First, I need to order the array from smallest to largest, 
//then splice the array at k so you only get the rest of it, then add all the numbers together

//Step 3: Code

function maxSum(arr, k) {
    let currentSum = 0
    for(let i = 0; i < arr.length - k + 1; i++){
        let subArray  = arr.slice(i, k + i)
        const sum = subArray.reduce((curr, acc) =>{
            return curr + acc
    }, 0)
    if(sum > currentSum){
        currentSum = sum
    }
}
    if(k > arr.length) return "Invalid"
    return currentSum
    }

console.log(maxSum([100, 200, 300, 400], 2))
console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSum([2, 3], 3))

//Step 4: Look Back

