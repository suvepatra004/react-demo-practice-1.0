// Longest Non Repeating Subscring Problem

function longestUniqueSubstring(str) {
  let maxLen = 0;
  let start = 0;
  const indexMap = {}; // stores latest index of each character

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    // If char was seen and is inside the current window, move 'start'
    if (indexMap[char] !== undefined && indexMap[char] >= start) {
      start = indexMap[char] + 1;
    }

    indexMap[char] = end; // update or set the index of the current char

    // Update max length of the substring
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

// ----------------------------
console.log(longestUniqueSubstring("abrkaabcdefghijjxxx")); // Output: 10
console.log(longestUniqueSubstring("abcabcbb")); // Output: 3
console.log(longestUniqueSubstring("bbbbb")); // Output: 1
console.log(longestUniqueSubstring("pwwkew")); // Output: 3
