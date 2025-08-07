// Product Sorting based on Price

function getSortedProductNames(products) {
  // Step 1: Sort the array by price (ascending order)
  const sorted = products.sort((a, b) => a.price - b.price);

  // Step 2: Return just the product names
  return sorted.map(product => product.name);
}

// Input: list of product objects
const products = [
  { name: "T-Shirt", price: 799 },
  { name: "Jeans", price: 1499 },
  { name: "Sneakers", price: 2499 },
  { name: "Cap", price: 299 }
];

// Output
const result = getSortedProductNames(products);
console.log(result); // Should log: ["Cap", "T-Shirt", "Jeans", "Sneakers"]
