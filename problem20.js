const readline = require('readline-sync');

// Take input from user
const score = readline.question('Enter your score: ');

// Check score and assign grade
let grade;
if (score >= 80 && score <= 100) {
  grade = 'A';
} else if (score >= 70 && score <= 89) {
  grade = 'B';
} else if (score >= 60 && score <= 69) {
  grade = 'C';
} else if (score >= 50 && score <= 59) {
  grade = 'D';
} else if (score >= 0 && score <= 49) {
  grade = 'F';
} else {
  console.log('Invalid score');
}

// Print the grade
if (grade) {
  console.log('Your grade is:', grade);
}
