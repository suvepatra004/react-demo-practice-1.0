// Employee Role Management System

// Fucntion to take the employee details and display
function getAccessPermissions(employee) {
  switch (employee.role) {
    case 'admin':
      return 'Full access to all systems';

    case 'manager':
      return 'Access to team reports & schedule';

    case 'developer':
      return 'Access to codebase and task board';

    case 'intern':
      return 'Read-only access to documentation';

    default:
      return 'No access';
  }
}

// Function call for output
const emp1 = { name: "Alice", role: "admin" };
const emp2 = { name: "Bob", role: "intern" };
const emp3 = { name: "Charlie", role: "sales" };

console.log(getAccessPermissions(emp1)); // Full access to all systems
console.log(getAccessPermissions(emp2)); // Read-only access to documentation
console.log(getAccessPermissions(emp3)); // No access
