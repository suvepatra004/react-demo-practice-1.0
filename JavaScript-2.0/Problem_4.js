// ✅ Email Validator Function
function validateEmail(email) {
  const cleaned = email.trim().toLowerCase();

  const suggestions = {
    "gamil.com": "gmail.com",
    "gnail.com": "gmail.com",
    "hotnail.com": "hotmail.com",
    "yaho.com": "yahoo.com"
  };

  const correctDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [local, domain] = cleaned.split("@");

  if (!domain || !local) {
    return { valid: false, suggestion: null };
  }

  const suggestedDomain = suggestions[domain];
  if (suggestedDomain) {
    return {
      valid: false,
      suggestion: `${local}@${suggestedDomain}`
    };
  }

  // Now check if format is valid and domain is correct
  if (emailRegex.test(cleaned) && correctDomains.includes(domain)) {
    return { valid: true, suggestion: null };
  }

  return { valid: false, suggestion: null };
}

// ✅ Username Generator Function
function generateUsername(fullName) {
  const names = fullName.trim().split(/\s+/);
  const firstName = names[0].toLowerCase();
  const lastInitial = names.length > 1 ? names[1][0].toLowerCase() : '';
  const randomNumber = Math.floor(Math.random() * 90) + 10;
  return firstName + lastInitial + randomNumber;
}

// ✅ Example Usage (with console logs)
console.log("Username examples:");
console.log(generateUsername("Alice Johnson"));   // ➞ "alicej42"
console.log(generateUsername("   John   Doe   ")); // ➞ "johnd37"
console.log(generateUsername("Samantha"));         // ➞ "samantha27"

console.log("\nEmail validation examples:");
console.log(validateEmail("test@gmail.com"));      // ➞ { valid: true, suggestion: null }
console.log(validateEmail("john@gamil.com"));      // ➞ { valid: false, suggestion: "john@gmail.com" }
console.log(validateEmail("invalidemail"));        // ➞ { valid: false, suggestion: null }

// Test Cases
console.log(validateEmail("test@gmail.com"));       // ✅ valid
console.log(validateEmail("john@gamil.com"));       // ❌ typo -> suggestion
console.log(validateEmail("user@hotnail.com"));     // ❌ typo -> suggestion
console.log(validateEmail("wrongemail"));           // ❌ invalid
console.log(validateEmail("jack@yaho.com"));        // ❌ typo -> suggestion
console.log(validateEmail("alex@outlook.com"));     // ✅ valid