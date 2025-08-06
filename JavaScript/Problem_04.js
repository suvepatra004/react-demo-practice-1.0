// Shopping cart array with some items

const cart = [
  { name: 'Shirt', price: 300, quantity: 2 },
  { name: 'Pants', price: 400, quantity: 1 },
  { name: 'Belt', price: 150, quantity: 1 }
];

// Function to calculate total with discount
function calculateTotal(cart) {
  let total = 0;

  // Loop through each item in the cart
  for (let item of cart) {
    total += item.price * item.quantity;
  }

  // Apply 10% discount if total is over ₹500
  if (total > 500) {
    total = total * 0.9;
  }

  // Round to 2 decimal places
  return Number(total.toFixed(2));
}

// Calculate and print the final total
const finalTotal = calculateTotal(cart);
console.log("Your final total is: ₹" + finalTotal);
