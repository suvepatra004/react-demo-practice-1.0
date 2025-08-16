// Simulate Sending OTP to Multiple Users

// Simulated async function (returns a promise that resolves in 1 second)
function sendOTP(phoneNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`OTP sent to ${phoneNumber}`);
    }, 1000);
  });
}

// Main async function that loops in sequence
async function processPhoneNumbers(numbers) {
  for (const num of numbers) {
    const message = await sendOTP(num);
    console.log(message);
  }
  return "All OTPs sent!";
}

// Demo
const phoneNumbers = ["+91 9999 999999", "+91 8888 888888", "+91 8984 854416"];

async function run() {
  const result = await processPhoneNumbers(phoneNumbers);
  console.log(result);
}

run();
