// Booking system - available slots

function getAvailableSlots(allSlots, bookedSlots) {
  // Use a Set for quick lookup of booked slots
  const bookedSet = new Set(bookedSlots);

  // Filter out the booked slots
  const available = allSlots.filter(slot => !bookedSet.has(slot));

  // Sort to make sure it's in order (optional if already sorted)
  return available.sort();
}

// Example usage
const allSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
const bookedSlots = ["09:30", "10:30"];

const availableSlots = getAvailableSlots(allSlots, bookedSlots);

console.log("Available Slots:", availableSlots);
// ➔ Available Slots: [ '09:00', '10:00', '11:00', '11:30' ]
