// Find the Top K most Frequent Elements in an Array

function topKFrequent(nums, k) {
  const frequencyMap = {};

  // Step 1: Count frequencies
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Step 2: Bucket sort by frequency
  // Create an array of empty buckets
  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);

  // Push numbers into buckets based on their frequency
  for (let num in frequencyMap) {
    const freq = frequencyMap[num];
    buckets[freq].push(Number(num));
  }

  // Step 3: Gather the top k frequent elements from the buckets
  const result = [];

  // Start from the highest frequency bucket
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  // If more than k due to ties, slice it down
  return result.slice(0, k);
}

// --------------------------
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4], 2)); // [3, 1]
console.log(topKFrequent([4, 4, 4, 6, 6, 2, 2, 2, 2, 5], 1)); // [2]
console.log(topKFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [9, 8, 7]
console.log(topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 5], 2)); // [4, 3]
console.log(topKFrequent([5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8], 3)); // [5, 8, 6]
