// Processing E-commerce Order Totals

// Our optimized reduce implementation

const reduce = (arr, fn, init) => {
  let acc = init;
  let i = -1;
  const len = arr.length;
  while (++i < len) acc = fn(acc, arr[i]);
  return acc;
};

// Calculate order total
function calculateOrderTotal(cart, taxRate, discounts = []) {
  // 1. Calculate subtotal
  const subtotal = reduce(
    cart,
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 2. Process discounts
  const discountAmount = reduce(
    discounts,
    (totalDiscount, discount) => {
      if (discount.type === "percentage") {
        return totalDiscount + subtotal * (discount.value / 100);
      }
      if (discount.type === "fixed") {
        return totalDiscount + discount.value;
      }
      if (discount.type === "category") {
        const categoryItems = cart.filter(
          item => item.category === discount.category
        );
        const categoryTotal = reduce(
          categoryItems,
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return totalDiscount + categoryTotal * (discount.value / 100);
      }
      return totalDiscount;
    },
    0
  );

  // 3. Apply tax
  const taxableAmount = subtotal - Math.min(discountAmount, subtotal);
  const tax = taxableAmount * (taxRate / 100);
  
  // 4. Calculate grand total
  return subtotal - discountAmount + tax;
}

// Example Usage
const cart = [
  { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1, category: "electronics" },
  { id: 2, name: "Phone Case", price: 19.99, quantity: 2, category: "accessories" },
  { id: 3, name: "USB-C Cable", price: 12.50, quantity: 3, category: "electronics" }
];

const discounts = [
  { code: "SAVE10", type: "percentage", value: 10 }, // 10% off entire order
  { code: "FREESHIP", type: "fixed", value: 5 },     // $5 off
  { code: "ELEC20", type: "category", value: 20, category: "electronics" } // 20% off electronics
];

const taxRate = 8.5; // 8.5% tax

const total = calculateOrderTotal(cart, taxRate, discounts);
console.log(`Grand Total: $${total.toFixed(2)}`);