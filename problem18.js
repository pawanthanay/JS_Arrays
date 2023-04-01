let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  let yearsToWait = 18 - age;
  console.log(`You need to wait ${yearsToWait} years to drive`);
}
