// Sorting of unsorted product data(From the backend)

const inventory = [
  { type: "Size", value: "M", quantity: 10 },
  { type: "Color", value: "Red", quantity: 5 },
  { type: "Size", value: "S", quantity: 0 },
  { type: "Color", value: "Blue", quantity: 3 },
  { type: "Size", value: "L", quantity: 7 },
  { type: "Color", value: "Green", quantity: 0 },
];

function organizeInventory(data) {
  // 1) Keep only in-stock items
  const inStock = data.filter(item => item.quantity > 0);

  // 2) Group values by type (and avoid duplicates)
  const grouped = inStock.reduce((acc, { type, value }) => {
    if (!acc[type]) acc[type] = [];
    if (!acc[type].includes(value)) acc[type].push(value);
    return acc;
  }, {});

  // 3) Sort each group's values alphabetically (case-insensitive)
  Object.keys(grouped).forEach(type => {
    grouped[type].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  });

  return grouped;
}

// Usage
console.log(organizeInventory(inventory));
