// You are given three numbers A, B & C. Print the largest amongst these three numbers.

// Input Description:
// Three numbers are provided to you.

// Output Description:
// Find and print the largest among the three

// Sample Input :
// 1
// 2
// 3
// Sample Output :
// 3

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

  var a=parseInt(userInput[0]);
  var b=parseInt(userInput[1]);
  var c=parseInt(userInput[2]);
  
  
    var answer=Math.max(a,b,c);
    
    console.log(answer);
});