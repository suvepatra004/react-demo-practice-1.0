// Expense Tracker — Calculate Monthly Expenses

function calculateExpenses(...expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      average: 0,
      max: 0,
      min: 0
    };
  }

  const total = expenses.reduce((sum, val) => sum + val, 0);
  const average = total / expenses.length;
  const max = Math.max(...expenses);
  const min = Math.min(...expenses);

  return {
    total,
    average,
    max,
    min
  };
}

const result = calculateExpenses(1200, 800, 450, 300, 620);
console.log(result);
// Output:
// {
//   total: 3370,
//   average: 674,
//   max: 1200,
//   min: 300
// }
