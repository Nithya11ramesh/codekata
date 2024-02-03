// Write a code to get an integer N and print the even values from 1 till N in a separate line.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the even values from 1 to N in a separate line.

// Sample Input :
// 6
// Sample Output :
// 2
// 4
// 6

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
for(i=2;i<=n;i=i+2){
    console.log(i);
}

  //end-here
});