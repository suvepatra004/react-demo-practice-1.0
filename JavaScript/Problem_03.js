// Find maximum number in an array
import promptSync from 'prompt-sync';
const prompt = promptSync();

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Ask the user to enter numbers separated by space
let input = prompt("Enter numbers separated by space: ");
// Split into array of strings, then convert each to number
let array = input.split(" ").map(Number);
console.log("You entered:", array);
console.log("Maximum number:", findMax(array));

// Example usage
// console.log(findMax([1, 2, 3, 4, 5])); // ➞ 5
// console.log(findMax([-1, -2, -3, -4, -5])); // ➞ -1