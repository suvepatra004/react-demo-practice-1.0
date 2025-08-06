const cart = [
  { name: 'Shirt', price: 300, quantity: 2 },
  { name: 'Pants', price: 400, quantity: 1 },
  { name: 'Belt', price: 150, quantity: 1 }
];

function calculateTotal(cart) {
  // Use reduce to compute total directly
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Apply discount inline, and use Math.round to avoid string->number
  const finalTotal = total > 500 ? total * 0.9 : total;

  // Rounding to 2 decimal places, staying as a number
  return Math.round(finalTotal * 100) / 100;
}

const finalTotal = calculateTotal(cart);
console.log("Your final total is: ₹" + finalTotal);
// This code calculates the total price of items in a shopping cart, applying a discount if the total exceeds ₹500.
// It uses the reduce method for cleaner and more efficient summation, and ensures the final total is rounded to two decimal places without converting it to a string. The final total is printed in a user-friendly format.
// The code is optimized for readability and performance, making it easier to maintain and understand.