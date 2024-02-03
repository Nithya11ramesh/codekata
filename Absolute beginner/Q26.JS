// Write a code get an integer number as input and print the odd and even digits of the number separately.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

// Sample Input :
// 1234
// Sample Output :
// 2 4
// 1 3

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
 var k=userInput[0].split("");
  var even=[];
  var odd=[];
  for(i=0;i<k.length;i++){
      if((k[i])%2===0)
        even.push(k[i]);
    else
    odd.push(k[i]);
    
  }
  
  even.sort();
  odd.sort();
  console.log(even.join(" "));
  console.log(odd.join(" "));
//end-here
});