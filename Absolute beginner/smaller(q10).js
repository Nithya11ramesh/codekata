// You are provided with two numbers. Find and print the smaller number.

// Input Description:
// You are provided with two numbers as input.

// Output Description:
// Print the small number out of the two numbers.

// Sample Input :
// 23 1
// Sample Output :
// 1

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

 var n=userInput[0].split(" ");
  var a=parseInt(n[0]);
  var b=parseInt(n[1]);
  
  if(a>b){
      console.log(b);
  }
  
  else
    console.log(a);

  //end-here
});