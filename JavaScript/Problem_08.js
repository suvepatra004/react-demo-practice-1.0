//  Problem: Group Users by Age Range

function groupByAgeRange(users) {
  const groups = { teen: [], youngAdult: [], adult: [] };

  for (const user of users) {
    if (user.age >= 13 && user.age <= 19) {
      groups.teen.push(user.name);
    } else if (user.age >= 20 && user.age <= 35) {
      groups.youngAdult.push(user.name);
    } else if (user.age > 35) {
      groups.adult.push(user.name);
    }
  }

  return groups;
}

// Example usage
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 32 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 45 },
  { name: 'Frank', age: 23 }
];

console.log(groupByAgeRange(users));