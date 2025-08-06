// Generate Monthly Expense Summary
/**
 * Problem Description
Imagine you’re building a personal finance tracker.
You have a list of expenses, each with:

description (string)

amount (number, in ₹)

date (string in YYYY-MM-DD format)

You want to write a JavaScript function that:

Takes this list of expenses and a specific month (like 2025-07).

Filters the expenses that fall into that month.

Calculates the total amount spent in that month.
 */

function getMonthlySummary(expenses, month) {
  // Filter expenses that match the given month
  const monthlyExpenses = expenses.filter(expense =>
    expense.date.startsWith(month)
  );

  // Sum up the total amount
  const total = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Return the summary object
  return {
    month: month,
    total: total,
    count: monthlyExpenses.length
  };
}

// Example usage
const expenses = [
  { description: 'Groceries', amount: 500, date: '2025-07-01' },
  { description: 'Internet Bill', amount: 800, date: '2025-07-10' },
  { description: 'Movie', amount: 300, date: '2025-06-15' },
  { description: 'Gym', amount: 700, date: '2025-07-20' },
  { description: 'Coffee', amount: 100, date: '2025-07-25' }
];

const summary = getMonthlySummary(expenses, '2025-07');
console.log(summary);

