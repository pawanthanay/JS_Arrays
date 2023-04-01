const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log("Sorted ages: ", sortedAges);
console.log("Minimum age: ", minAge);
console.log("Maximum age: ", maxAge);

// Find the median age
const middle = Math.floor(sortedAges.length / 2);
const medianAge =
  sortedAges.length % 2 === 0
    ? (sortedAges[middle] + sortedAges[middle - 1]) / 2
    : sortedAges[middle];
console.log("Median age: ", medianAge);

// Find the average age
const sumAges = sortedAges.reduce((sum, age) => sum + age, 0);
const avgAge = sumAges / sortedAges.length;
console.log("Average age: ", avgAge);

// Find the range of the ages
const ageRange = maxAge - minAge;
console.log("Age range: ", ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
const diffMinAvg = Math.abs(minAge - avgAge);
const diffMaxAvg = Math.abs(maxAge - avgAge);
console.log("Difference between min and avg age: ", diffMinAvg);
console.log("Difference between max and avg age: ", diffMaxAvg);
