// Shopping Cart System with Multiple Features

// --------------------------
// Helper functions
// --------------------------

function addItemToCart(cart, itemToAdd) {
  const index = cart.findIndex(item => item.name === itemToAdd.name);

  if (index !== -1) {
    cart[index].quantity += itemToAdd.quantity;
  } else {
    cart.push({ ...itemToAdd });
  }

  return cart;
}

function removeItemFromCart(cart, itemName, qtyToRemove) {
  const index = cart.findIndex(item => item.name === itemName);

  if (index !== -1) {
    cart[index].quantity -= qtyToRemove;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1); // remove item completely
    }
  }

  return cart;
}

function calculateTotals(cart) {
  return cart.reduce(
    (totals, item) => {
      totals.totalQuantity += item.quantity;
      totals.totalPrice += item.quantity * item.pricePerUnit;
      return totals;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );
}

function applyDiscounts(totalPrice, totalQuantity) {
  let finalAmount = totalPrice;

  if (totalPrice > 2000) {
    finalAmount -= finalAmount * 0.10;
  }

  if (totalQuantity > 5) {
    finalAmount -= 100;
  }

  return Math.max(0, Math.round(finalAmount));
}

// --------------------------
// Putting it together
// --------------------------

function getCartSummary(cart) {
  const { totalPrice, totalQuantity } = calculateTotals(cart);
  const finalAmount = applyDiscounts(totalPrice, totalQuantity);

  return {
    totalQuantity,
    totalPrice,
    finalAmount
  };
}

// --------------------------
// Example usage
// --------------------------

let cart = [
  { name: "T-shirt", quantity: 2, pricePerUnit: 500 },
  { name: "Jeans", quantity: 1, pricePerUnit: 1200 }
];

console.log("Initial cart:", cart);

cart = addItemToCart(cart, { name: "Cap", quantity: 3, pricePerUnit: 200 });
console.log("After adding Caps:", cart);

cart = removeItemFromCart(cart, "T-shirt", 1);
console.log("After removing 1 T-shirt:", cart);

const summary = getCartSummary(cart);
console.log("\n--- Cart Summary ---");
console.log("Total Quantity:", summary.totalQuantity);
console.log("Total Price (before discount): ₹" + summary.totalPrice);
console.log("Final Amount (after discounts): ₹" + summary.finalAmount);
