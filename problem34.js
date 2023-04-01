function solveLinEquation(a, b, c) {
    if (a === 0) {
      return "a cannot be 0";
    } else {
      return (-b - c) / a;
    }
}


const a = 2;
const b = 3;
const c = 4;
const result = solveLinEquation(a, b, c);
console.log(result); 
