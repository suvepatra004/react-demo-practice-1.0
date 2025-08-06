// Filtering Unique Emails from the Existing data without any duplication

// Example usage
const emails = [
  'john@gmail.com',
  'Alice@yahoo.com',
  'JOHN@gmail.com',
  'bob@outlook.com',
  'alice@YAHOO.com'
];

function getUniqueEmails(emails) {
    const seen = new Set();
    const uniqueEmail = [];

    for(let email of emails) {
        // change the existing email to lower case
        const lowerEmail = email.toLowerCase();
        if(!seen.has(lowerEmail)) {
            seen.add(lowerEmail);
            uniqueEmail.push(email);
        }
    }
    return uniqueEmail;
}

console.log(`${getUniqueEmails(emails)}`);
