// Mask Credit Card Number

maskCardNumber("1234 5678 9012 3456")
// ➞ "**** **** **** 3456"

maskCardNumber("4321-8765-4321-0000")
// ➞ "****-****-****-0000"

maskCardNumber("9999999999999999")
// ➞ "************9999"

function maskCardNumber(cardNumber) {
  let digitsOnly = cardNumber.replace(/\D/g, ''); // Remove non-digits
  const lastFour = digitsOnly.slice(-4);
  let masked = '';
  let digitCount = 0;

  for (let char of cardNumber) {
    if (/\d/.test(char)) {
      digitCount++;
      if (digitCount <= digitsOnly.length - 4) {
        masked += '*';
      } else {
        masked += char;
      }
    } else {
      masked += char; // Keep spaces or dashes
    }
  }

  return masked;
}

// Example usage
console.log(maskCardNumber("1234 5678 9012 3456")); // "**** **** **** 3456"
console.log(maskCardNumber("4321-8765-4321-0000")); // "****-****-****-0000"
console.log(maskCardNumber("9999999999999999")); // "************9999"
console.log(maskCardNumber("1234-5678-9012-3456")); // "****-****-****-3456"
console.log(maskCardNumber("1234567890123456")); // "************3456"
console.log(maskCardNumber("1234 5678 9012 3456 7890")); // "**** **** **** 7890"