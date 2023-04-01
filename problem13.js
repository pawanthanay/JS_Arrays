const readlineSync = require('readline-sync');

// Prompt the user to enter the base and height of the triangle
let base = readlineSync.question('Enter the base of the triangle: ');
let height = readlineSync.question('Enter the height of the triangle: ');

// Convert the input strings to numbers
base = parseFloat(base);
height = parseFloat(height);

// Calculate the area of the triangle
let area = 0.5 * base * height;

// Display the result to the user
console.log('The area of the triangle is ' + area.toFixed(2));
