// Write a code to get the input and print it 5 times.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Output contains 5 lines with each line having the value N.

// Sample Input :
// 4
// Sample Output :
// 4
// 4
// 4
// 4
// 4

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
  for(i=1;i<=5;i++)
    console.log(a);

  //end-here
});