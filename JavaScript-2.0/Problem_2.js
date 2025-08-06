// Create a User Name from Full Name

function generateUsername(fullName) {
  // Step 1: Clean and split the name
  const names = fullName.trim().split(/\s+/);

  // Step 2: Get the first name and last initial (if any)
  const firstName = names[0].toLowerCase();
  const lastInitial = names.length > 1 ? names[1][0].toLowerCase() : '';

  // Step 3: Generate random number between 10 and 99
  const randomNumber = Math.floor(Math.random() * 90) + 10;

  // Step 4: Combine everything
  return firstName + lastInitial + randomNumber;
}

generateUsername("Alice Johnson")  
// Possible output: "alicej42"

generateUsername("   John   Doe   ")  
// ➞ "johnd37"

generateUsername("Samantha")  
// ➞ "samantha27" (no last name, just use the first name)

console.log(generateUsername("Alice Johnson")); // Example output: "alicej42"
console.log(generateUsername("   John   Doe   ")); // Example output: "johnd37"