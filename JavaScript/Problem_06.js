// Count Words in a Paragraph

function countWords(paragraph) {
  // Remove punctuation and convert to lowercase
  const cleanText = paragraph.replace(/[^\w\s]/g, '').toLowerCase();

  // Split by spaces to get words
  const words = cleanText.split(/\s+/);

  // Count occurrences
  const wordCounts = {};

  for (let word of words) {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;
}

// Example usage
const text = "Hi this is suvendu I am a odia vloger currently living in Bangalore. I am a software engineer and I love to code. I am also a foodie and I love to explore new places. I am a travel enthusiast and I love to travel around the world. I am a tech enthusiast and I love to learn new technologies.";
console.log(countWords(text));
