// Customer Loyalty Tier System

const customers = [
  { name: "Alice", spent: 1200 },
  { name: "Bob", spent: 6000 },
  { name: "Charlie", spent: 25000 },
  { name: "David", spent: 400 },
  { name: "Eve", spent: 15000 },
  { name: "Frank", spent: 22000 },
  { name: "Grace", spent: 3000 }
];

// Another Customer details
const customers2 = [
  { name: "Ishaan", spent: 800 },
  { name: "Priya", spent: 5200 },
  { name: "Rahul", spent: 18000 },
  { name: "Sneha", spent: 2500 },
  { name: "Karthik", spent: 45000 },
  { name: "Neha", spent: 23000 },
  { name: "Arjun", spent: 600 },
  { name: "Divya", spent: 7500 },
  { name: "Sameer", spent: 12500 },
  { name: "Riya", spent: 19500 },
  { name: "Manish", spent: 300 },
  { name: "Sanya", spent: 21000 }
];


// Check tier of customers
function getTier(spent) {
  if (spent >= 20000) return "Gold";
  if (spent >= 5000) return "Silver";
  return "Bronze";
}

// Map cutomer to their respective tier
function assignTiers(customers) {
  return customers.map(customer => ({
    name: customer.name,
    spent: customer.spent,
    tier: getTier(customer.spent)
  }));
}

// Count customers in each tier
function countTiers(customersWithTiers) {
  return customersWithTiers.reduce((counts, customer) => {
    counts[customer.tier] = (counts[customer.tier] || 0) + 1;
    return counts;
  }, {});
}

const customersWithTiers = assignTiers(customers);

console.log("🎖 Customers with assigned tiers:");
customersWithTiers.forEach(c =>
  console.log(`- ${c.name}: ₹${c.spent} => ${c.tier}`));

const tierCounts = countTiers(customersWithTiers);
console.log("📊 Total customers in each tier:", tierCounts);
