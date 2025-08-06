// Problem: Analyze Student Scores

const students = [
  { name: "Alice", age: 20, scores: [80, 85, 90] },
  { name: "Bob", age: 22, scores: [70, 75, 78] },
  { name: "Charlie", age: 19, scores: [95, 92, 88] },
];

function getAverageScore(student) {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  return total / student.scores.length;
}

function getTopStudents(students, threshold) {
  return students
    .filter(student => getAverageScore(student) > threshold)
    .map(student => student.name);
}

function getClassSummary(students) {
  let totalAverage = 0;
  let highest = { name: "", avg: -Infinity };
  let lowest = { name: "", avg: Infinity };
  
  for (const student of students) {
    const avg = getAverageScore(student);
    totalAverage += avg;

    if (avg > highest.avg) {
      highest = { name: student.name, avg };
    }
    if (avg < lowest.avg) {
      lowest = { name: student.name, avg };
    }
  }

  return {
    averageClassScore: totalAverage / students.length,
    highestScorer: highest.name,
    lowestScorer: lowest.name
  };
}

// Example usages
console.log(getAverageScore(students[1])); // ➞ 
console.log(getTopStudents(students, 90)); // ➞ ["Alice", "Charlie"]
console.log(getClassSummary(students));
/*
{
  averageClassScore: 84.33,
  highestScorer: "Charlie",
  lowestScorer: "Bob"
}
*/
