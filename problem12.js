// Get the current date
let now = new Date();

// Get the year today
let year = now.getFullYear();
console.log("Year: " + year);

// Get the month today as a number
let month = now.getMonth() + 1;  // Adding 1 to get month number in range 1-12
console.log("Month: " + month);

// Get the date today
let date = now.getDate();
console.log("Date: " + date);

// Get the day today as a number
let day = now.getDay();  // Returns a number between 0 and 6, where 0 is Sunday and 6 is Saturday
console.log("Day: " + day);

// Get the hours now
let hours = now.getHours();
console.log("Hours: " + hours);

// Get the minutes now
let minutes = now.getMinutes();
console.log("Minutes: " + minutes);

// Find out the number of seconds elapsed from January 1, 1970 to now
let seconds = Math.floor(now.getTime() / 1000);  // getTime() returns time in milliseconds
console.log("Seconds since Jan 1, 1970: " + seconds);
