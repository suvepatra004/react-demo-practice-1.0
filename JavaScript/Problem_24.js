// Inventory Restock calculation problem

const inventory = [
  { name: "Laptop", stock: 4, threshold: 5 },
  { name: "Mouse", stock: 20, threshold: 15 },
  { name: "Keyboard", stock: 2, threshold: 10 },
  { name: "Monitor", stock: 8, threshold: 8 },
  { name: "Headphones", stock: 0, threshold: 5 }
];


// Function to check the products needed restock
function getRestockList(inventory) {
    return inventory.filter(item => item.stock < item.threshold);
}

// Function to calculate total unit to reorder
function calculateTotalRestock(restockList) {
  return restockList.reduce((sum, item) =>
    sum + (item.threshold - item.stock), 0);
}

// Usage
// -------------------------------
const restockList = getRestockList(inventory);

console.log("📦 Products needing restock:");
restockList.forEach(item => {
  console.log(`- ${item.name}: need to order ${item.threshold - item.stock} more units.`);
});

const totalUnits = calculateTotalRestock(restockList);
console.log(`✅ Total units to reorder: ${totalUnits}`);