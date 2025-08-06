// Group Anagrams

function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    // Sort the characters of the word
    const sorted = word.split('').sort().join('');

    // If the sorted version is not in map, add it
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    // Push original word into the corresponding group
    map.get(sorted).push(word);
  }

  // Return the grouped anagrams as an array of arrays
  return Array.from(map.values());
}


const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
