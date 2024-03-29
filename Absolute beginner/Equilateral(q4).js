// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.

// Input Description:
// The side of an equilateral triangle is provided as the input.

// Output Description:
// Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

// Sample Input :
// 20
// Sample Output :
// 173.21

//SOLUTION:

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var a=parseFloat(userInput[0]);
  var b=(Math.sqrt(3)*a*a)/4;
  b=b.toFixed(2);
  
  console.log(b);

  //end-here
});