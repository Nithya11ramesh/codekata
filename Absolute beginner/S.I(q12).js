// You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

// Print the output up to two decimal places (Round-off if necessary).

// (S.I. = P*T*R/100)

// Input Description:
// Three values are given to you as the input. these values correspond to Principle amount, Interest Rate and Time in that particular order.

// Output Description:
// Find the Simple interest and print it up to two decimal places. Round off if required.

// Sample Input :
// 1000 2 5
// Sample Output :
// 100.00


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

  var a=(userInput[0].split(" "));
  var p=parseFloat(a[0]);
  var r=parseFloat(a[1]);
  var t=parseFloat(a[2]);
  var si=(p*r*t/100);
console.log(si.toFixed(2));
  //end-here
});