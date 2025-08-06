// Order Management System

// -------------------------------------------
// Data: the shopping cart
// -------------------------------------------
let cart = [];

// -------------------------------------------
// Function 1: Add product to cart
// -------------------------------------------
function addToCart(name, price, quantity = 1) {
  // Check if item already exists
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart[index].quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
}

// -------------------------------------------
// Function 2: Remove product from cart
// -------------------------------------------
function removeFromCart(name, quantity = 1) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart[index].quantity -= quantity;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1); // remove item completely
    }
  }
}

// -------------------------------------------
// Function 3: Calculate total of the cart
// -------------------------------------------
function calculateTotal() {
  return cart.reduce((total, item) => 
    total + item.price * item.quantity, 
    0
  );
}

// -------------------------------------------
// Function 4: Apply coupon discount
// -------------------------------------------
function applyCoupon(total) {
  if (total > 3000) {
    return total * 0.8; // 20% off
  }
  return total;
}

// -------------------------------------------
// Function 5: Get final bill summary
// -------------------------------------------
function getBill() {
  const total = calculateTotal();
  const finalAmount = applyCoupon(total);
  return {
    totalBeforeDiscount: total,
    finalAmount: Math.round(finalAmount)
  };
}

// -------------------------------------------
// Usage example
// -------------------------------------------

addToCart("Laptop", 50000, 1);
addToCart("Mouse", 500, 2);
addToCart("Keyboard", 1500, 1);

removeFromCart("Mouse", 1); // remove 1 mouse

const bill = getBill();

console.log("Cart:", cart);
console.log("Total before discount: ₹" + bill.totalBeforeDiscount);
console.log("Final amount to pay: ₹" + bill.finalAmount);
