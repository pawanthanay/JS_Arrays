const readlineSync = require('readline-sync');

// Prompt for month and year
const month = readlineSync.question('Enter a month (1-12): ');
const year = readlineSync.question('Enter a year: ');

// Calculate number of days in the month
let numDays;

if (month === '2') {
  // February - check for leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    numDays = 29;
  } else {
    numDays = 28;
  }
} else if (['4', '6', '9', '11'].includes(month)) {
  // April, June, September, November
  numDays = 30;
} else {
  // January, March, May, July, August, October, December
  numDays = 31;
}

console.log(`There are ${numDays} days in ${month}/${year}.`);
