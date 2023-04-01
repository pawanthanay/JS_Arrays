let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i; // add even number to sumEven
  } else {
    sumOdd += i; // add odd number to sumOdd
  }
}

console.log("Sum of all even numbers: " + sumEven);
console.log("Sum of all odd numbers: " + sumOdd);
