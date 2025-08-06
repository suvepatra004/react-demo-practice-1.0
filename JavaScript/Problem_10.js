// Problem: Find Most Frequent Element

let array = [1, 2, 11, 2, 2, 4, 5, 1, 33, 33, 7, 8];

function findMostFrequent(arr) {
  let freqMap = {};
  let maxCount = 0;
  let maxElement = null;

  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    if (freqMap[num] > maxCount) {
      maxCount = freqMap[num];
      maxElement = num;
    }
  }

  return { element: maxElement, count: maxCount };
}

console.log(findMostFrequent(array));
