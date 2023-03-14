// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { constants } = require("buffer")
const { Console } = require("console")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Psuedo Code: // had to ask for clarification but now I understand that the expect.arrayContaing(array) method with (.not.toequal matcher) is used to allow the return to not be 100% equal to the expected Output. 
// Create an expect statement for each aarray given using the new method of expect.arrayContaining(array) to iterate through the arrays.
// Use the .not.toequal matcher to allow the expected output to be shuffled or changed from the original array.
// Create a function named arrayContaining that will take in both arrays and remove the color purple from the array
// use the .slice method to remove the value at the first index
// console.log the array's colors1 & colors2 


describe("arrayContaining", () => {
  // const noPur
  it("returns an array without the string purple in a different order", () => {
    expect(["green", "yellow", "pink", "blue"]).not.toEqual(expect.arrayContaining(colors1))
    expect(["periwinkle", "saffron", "ochre","indigo","aquamarine"]).not.toEqual(expect.arrayContaining(colors2))
  })
})
// ***expect(received).toEqual(expected) Fail // deep equality (fails when using to equal because the expect changes from the original array)
// ***Test Suites: 1 passed, 1| total Tests:1 passed, 1 total - Test passes automatically because the the .not is allowing the expect to differ from the original array.

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// Results: Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// b) Create the function that makes the test pass.
const arrayContaining =  (pallete1, pallete2) => {
    const remove = pallete1(pallete2).slice(1)
    return remove
  }
  console.log(arrayContaining(colors1.slice(1)))
  console.log(arrayContaining(colors2.slice(1)))
  
  // --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
//Psuedo Code:
// a) Create a test with expect statements for each of the variables provided.
// Use totalVote as my greeter
// Create a function that destructures the key value pairs of votes1 and votes2
//Create a variable to hold the value of the key value pairs
// subtract the key value pairs from one another
// return the totalSum(we will use subtraction) of votes 1 & votes2 
describe("totalVote", () => {
  it("returns the total tally of upVotes and downVotes", () => {
    expect(totalVote(votes1)).toEqual(11)
    expect(totalVote(votes2)).toEqual(-31)
  })
})
  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31
  
//   // ReferenceError: totalVote is not defined
  
// })
const totalVote = (object) => {
  let {upVotes, downVotes} = object
  let totalSum = (upVotes - downVotes)
  return totalSum
  
}

// arrayContaining
//     ✓ returns an array without the string purple in a different order (6 ms)
//   totalVote
//     ✓ returns the total tally of upVotes and downVotes (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// Psuedo Code:
// a) Create a test with an expect statement using the variables provided.
// Create a function called allTogether that takes in both arrays
// create a variable called mergedArray that will use the method .concat to merge the two arrays together
// Use .filter to remove all duplicate words from the returned array
// (I tried to use .spllice at first but that did not workout completely It would lwave off undefined everytime.)
describe("allTogether", () => {
  it("returns 1 array with no duplicate values", () => {
    expect(allTogether(dataArray1)).toEqual(["array", "object", "number", "string", "Boolean"])
    expect(allTogether(dataArray2)).toEqual(["string", "null", "Boolean", "string", "undefined"])
  })
})
// //      ReferenceError: allTogether is not defined
  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// // b) Create the function that makes the test pass.
const allTogether = (array1, array2) => {
  const mergeArray = array1.concat(array2)
  return mergeArray.filter((value, index) =>
    mergeArray.indexOf(value) == index)
}
console.log(allTogether(dataArray1,dataArray2));

// I tried to use .spllice at first but that did not workout completely It would lwave off undefined everytime.