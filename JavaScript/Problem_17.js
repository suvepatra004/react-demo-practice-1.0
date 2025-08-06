// Smart Search Suggestions

const items = [
  "Apple MacBook",
  "Apple iPhone",
  "Android Phone",
  "Wireless Mouse",
  "Wired Keyboard",
  "Mechanical Keyboard",
  "Gaming Headset",
  "Desk Lamp",
  "Office Chair"
];

const popularItems = ["Apple iPhone", "Gaming Headset", "Office Chair"];


function searchSuggestions(query) {
  // Lowercase input for case-insensitive match
  const trimmedQuery = query.trim().toLowerCase();

  if (trimmedQuery === "") {
    return popularItems;
  }

  const matches = items.filter(item =>
    item.toLowerCase().includes(trimmedQuery)
  );

  return matches.length > 0 ? matches : ["No suggestions found."];
}

// --------------------------
// Example tests
// --------------------------

console.log(searchSuggestions("a"));      // ["Apple MacBook", "Apple iPhone", "Android Phone"]
console.log(searchSuggestions("wire"));   // ["Wireless Mouse", "Wired Keyboard"]
console.log(searchSuggestions(""));       // ["Apple iPhone", "Gaming Headset", "Office Chair"]
console.log(searchSuggestions("xyz"));    // ["No suggestions found."]
console.log(searchSuggestions("mp"));

