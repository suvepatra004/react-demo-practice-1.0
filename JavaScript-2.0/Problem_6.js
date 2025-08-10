// Online Order Processing System

// Function to calculate subtotal of items
function calculateSubtotal(items) {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to apply discount
function applyDiscount(subtotal, discountCode) {
  const discounts = {
    SAVE10: 0.10,
    SAVE20: 0.20
  };
  
  const discount = discounts[discountCode] || 0;
  return subtotal - (subtotal * discount);
}

// Function to apply tax
function applyTax(amount) {
  const TAX_RATE = 0.05;
  return amount + (amount * TAX_RATE);
}

// Main function to process order
function processOrder(order) {
  let subtotal = calculateSubtotal(order.items);
  let afterDiscount = applyDiscount(subtotal, order.discountCode);
  let finalTotal = applyTax(afterDiscount);

  return {
    orderId: order.id,
    finalTotal: finalTotal.toFixed(2)
  };
}

// Example orders
const orders = [
  {
    id: 1,
    items: [
      { name: "Laptop", price: 800, quantity: 1 },
      { name: "Mouse", price: 20, quantity: 2 }
    ],
    discountCode: "SAVE10"
  },
  {
    id: 2,
    items: [
      { name: "Phone", price: 500, quantity: 1 },
      { name: "Case", price: 25, quantity: 1 }
    ],
    discountCode: "SAVE20"
  },
  {
    id: 3,
    items: [
      { name: "Headphones", price: 150, quantity: 2 }
    ]
    // no discount code
  }
];

// Process all orders
const results = orders.map(order => processOrder(order));

console.log(results);
/*
Expected Output:
[
  { orderId: 1, finalTotal: '819.00' },
  { orderId: 2, finalTotal: '441.00' },
  { orderId: 3, finalTotal: '315.00' }
]
*/
