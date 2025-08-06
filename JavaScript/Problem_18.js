// Limit visible words in a long string (like blog previews)


function getPreview(text, wordLimit) {
  const words = text.trim().split(/\s+/);

  if (words.length <= wordLimit) {
    return text;
  }

  const preview = words.slice(0, wordLimit).join(" ");
  return preview + "...";
}

// --------------------------
// Example usage
// --------------------------

const article = "JavaScript is a powerful, flexible programming language used everywhere.";

console.log(getPreview(article, 5));
// ➔ "JavaScript is a powerful, flexible..."

console.log(getPreview(article, 10));
// ➔ "JavaScript is a powerful, flexible programming language used everywhere."

console.log(getPreview("Hello world", 5));
// ➔ "Hello world"
