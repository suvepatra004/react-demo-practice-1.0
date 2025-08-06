// Group students by grade

// Students info
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" }
];

// Group grades based on grade
function groupByGrade(students) {
  return students.reduce((groups, student) => {
    if (!groups[student.grade]) {
      groups[student.grade] = [];
    }
    groups[student.grade].push(student.name);
    return groups;
  }, {});
}

console.log(groupByGrade(students));
