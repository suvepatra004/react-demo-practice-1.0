/**
 * Format Numbers with Dashes
 * 
    Problem Description
    Write a function that takes a number as input (like 274)
    and returns a string where each even digit is surrounded by dashes (-).

    So for example:

    274 → 2-7-4

    68145 → 6-8-1-4-5

    135 → 135 (no even digit surrounded because it’s only odd or ends up no extra dashes)

    But avoid multiple -- if evens are adjacent.
    Example:

    4682 → -4-6-8-2-
    (each even still gets surrounded by a dash, but adjacent even digits just keep going).
 */

function formatNumber(num) {
  const digits = num.toString().split('');
  let result = '';

  for (let i = 0; i < digits.length; i++) {
    const d = digits[i];

    if (parseInt(d) % 2 === 0) {
      result += `-${d}-`;
    } else {
      result += d;
    }
  }

  // Replace multiple '--' with single '-'
  result = result.replace(/--+/g, '-');

  // Remove leading or trailing dash
  result = result.replace(/^-|-$/g, '');

  return result;
}

// Example usage
console.log(formatNumber(274));    
console.log(formatNumber(681444));  
console.log(formatNumber(1359));    // ➞ "1359"
console.log(formatNumber(4682));   // ➞ "-4-6-8-2-"
console.log(formatNumber(111111));   // ➞ "-4-6-8-2-"
console.log(formatNumber(2222222));   
