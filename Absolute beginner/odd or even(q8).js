// You are provided with a number check whether its odd or even. 

// Print "Odd" or "Even" for the corresponding cases.

// Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".

// Input Description:
// A number is provided as the input.

// Output Description:
// Find out whether the number is odd or even. Print "Odd" or "Even" for the corresponding cases. Note: In case of a decimal, Round off to nearest integer and then find the output. In case the input is zero, print "Zero".

// Sample Input :
// 2
// Sample Output :
// Even


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
var n=parseInt(userInput[0]);
if(n%2===0)
    console.log("Even");
  else
    console.log("Odd");
//end-here
});