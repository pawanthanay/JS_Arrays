const readlineSync = require('readline-sync');

// Get input from user for month and year
const month = readlineSync.question('Enter month (1-12): ');
const year = readlineSync.question('Enter year (e.g. 2023): ');

// Calculate number of days in the given month
const daysInMonth = new Date(year, month, 0).getDate();

// Output the result
console.log(`There are ${daysInMonth} days in ${month}/${year}.`);
