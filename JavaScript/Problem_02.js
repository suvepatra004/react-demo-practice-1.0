// Count the number of even numbers in an array

import promptSync from 'prompt-sync';
const prompt = promptSync();

function countEvens(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}

// Ask the user to enter numbers separated by space
let input = prompt("Enter numbers separated by space: ");

// Split into array of strings, then convert each to number
let array = input.split(" ").map(Number);

console.log("You entered:", array);
console.log("Count of even numbers:", countEvens(array));
