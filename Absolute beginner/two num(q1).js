// You are given Two Numbers, A and B. If C = A + B. Find C.

// Note: Round off the output to a single decimal place.

// Input Description:
// You are provided with two numbers A and B.

// Output Description:
// Find the sum of the two numbers (A + B)

//Sample Input :
// 1
// 1
// Sample Output :
// 2

//SOLUTION

// Getting input via STDIN
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
var A=parseInt(userInput[0])
var B=parseInt(userInput[1])
  var ans=A+B;
  console.log(ans);
//end-here
});