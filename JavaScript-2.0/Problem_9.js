// Filtering Upcoming Birthdays using Array.prototype.filter

function parseMonth(dateString) {
  return new Date(dateString).getMonth() + 1; // JS months are 0-based
}

function getBirthdaysInMonth(users, month) {
  const filtered = users.filter((user) => parseMonth(user.dob) === month);
  return filtered.map((user) => user.name);
}

// Demo:
const users = [
  { name: "Alice", dob: "1998-04-15" },
  { name: "Bob", dob: "2000-07-09" },
  { name: "Charlie", dob: "1995-04-22" },
  { name: "David", dob: "1989-12-01" },
];

console.log(getBirthdaysInMonth(users, 4)); // ["Alice", "Charlie"]
