// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

// Input Description:
// First line contains an integer A. Second line contains an Integer N.

// Output Description:
// Print the integer A, N times in a separate line.

// Sample Input :
// 2 3
// Sample Output :
// 2
// 2
// 2

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
var code=userInput[0].split(" ");
  var a=parseInt(code[0]);
  var n=parseInt(code[1]);
  
  for(i=1;i<=n;i++)
    console.log(a)
  //end-here
});