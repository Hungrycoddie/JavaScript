// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line.
// Add ["Paul", 35] to the beginning of the myArray variable using unshift().
myArray.unshift(["Paul", 35])
console.log(myArray)
