// Track Daily Visitors & Find the Peak Day

const visitors = [
  { day: "Monday", count: 120 },
  { day: "Tuesday", count: 80 },
  { day: "Wednesday", count: 150 },
  { day: "Thursday", count: 90 },
  { day: "Friday", count: 200 },
  { day: "Saturday", count: 300 },
  { day: "Sunday", count: 180 }
];

// ------------------------------
// Function 1: Calculate total visitors
// ------------------------------
function getTotalVisitors(visitors) {
  return visitors.reduce((sum, day) => sum + day.count, 0);
}

// ------------------------------
// Function 2: Calculate average visitors
// ------------------------------
function getAverageVisitors(visitors) {
  if (visitors.length === 0) return 0;
  return getTotalVisitors(visitors) / visitors.length;
}

// ------------------------------
// Function 3: Find peak day
// ------------------------------
function getPeakDay(visitors) {
  if (visitors.length === 0) return null;

  return visitors.reduce((peak, day) => 
    day.count > peak.count ? day : peak
  );
}

// ------------------------------
// Example usage
// ------------------------------

console.log("📈 Website Visitor Stats:");

console.log(`- Total visitors: ${getTotalVisitors(visitors)}`);
console.log(`- Average per day: ${getAverageVisitors(visitors).toFixed(2)}`);

const peakDay = getPeakDay(visitors);
console.log(`- Peak day: ${peakDay.day} with ${peakDay.count} visitors`);
