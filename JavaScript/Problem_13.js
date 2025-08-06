// Shopping Cart Price Calculator with Discount Rules


// Function that calculates the total price of products and applies the discout
function calculateCartDetails(cart) {
  // Calculate total price and quantity
  const { totalPrice, totalQuantity } = cart.reduce(
    (acc, item) => {
      acc.totalPrice += item.quantity * item.pricePerUnit;
      acc.totalQuantity += item.quantity;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  // Apply discounts
  let finalAmount = totalPrice;

  if (totalPrice > 2000) {
    finalAmount -= finalAmount * 0.10; // 10% off
  }

  if (totalQuantity > 5) {
    finalAmount -= 100;
  }

  finalAmount = Math.max(0, Math.round(finalAmount));

  // Return all details
  return {
    totalPrice,
    totalQuantity,
    finalAmount
  };
}

// ------------------------------------------------------
// Example: 20 sample carts to test
// ------------------------------------------------------
const carts = [
  [
    { name: "Shirt", quantity: 2, pricePerUnit: 400 },
    { name: "Belt", quantity: 1, pricePerUnit: 200 }
  ],
  [
    { name: "Laptop Bag", quantity: 1, pricePerUnit: 2500 }
  ],
  [
    { name: "Shoes", quantity: 1, pricePerUnit: 1500 },
    { name: "Socks", quantity: 6, pricePerUnit: 50 }
  ],
  [
    { name: "Notebook", quantity: 10, pricePerUnit: 30 }
  ],
  [
    { name: "Watch", quantity: 1, pricePerUnit: 5000 }
  ],
  [
    { name: "Pen", quantity: 15, pricePerUnit: 20 },
    { name: "Diary", quantity: 2, pricePerUnit: 100 }
  ],
  [
    { name: "Keyboard", quantity: 1, pricePerUnit: 1200 },
    { name: "Mouse", quantity: 1, pricePerUnit: 600 }
  ],
  [
    { name: "Charger", quantity: 1, pricePerUnit: 800 },
    { name: "Cable", quantity: 4, pricePerUnit: 150 }
  ],
  [
    { name: "T-shirt", quantity: 3, pricePerUnit: 300 },
    { name: "Shorts", quantity: 2, pricePerUnit: 400 },
    { name: "Cap", quantity: 1, pricePerUnit: 200 }
  ],
  [
    { name: "Goggles", quantity: 1, pricePerUnit: 1500 },
    { name: "Sun Cream", quantity: 1, pricePerUnit: 300 }
  ]
];

// ------------------------------------------------------
// Print a bill summary for each cart
// ------------------------------------------------------
carts.forEach((cart, index) => {
  const { totalPrice, totalQuantity, finalAmount } = calculateCartDetails(cart);
  console.log(`--- Cart #${index + 1} ---`);
  console.log(`Total Price (before discount): ₹${totalPrice}`);
  console.log(`Total Quantity: ${totalQuantity}`);
  console.log(`Final Amount (after discount): ₹${finalAmount}`);
  console.log("");
});
