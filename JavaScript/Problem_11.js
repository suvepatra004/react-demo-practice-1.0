//  Problem: Group Words by First Letter

function groupByFirstLetter(words) {
    const grouped = {};

    // run the loop to check the first letter and store the word to the 'grouped' object container
    for(let word of words) {
        let firstLetter = word[0].toLowerCase();

        // Check if there is any word exists or not
        if(!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        // Then add the word according to its first letter
        grouped[firstLetter].push(word);
    }
    return grouped;
}

const countries = ['Mexico', 'India', 'Iran', 'US', 'UK', 'UAE', 'Philipine', 'Poland', 'Nauru'];

console.log("Different Countries are grouped as: ", groupByFirstLetter(countries));
