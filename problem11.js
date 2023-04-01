4 > 3          // true
4 >= 3         // true
4 < 3          // false
4 <= 3         // false
4 == 4         // true
4 === 4        // true
4 != 4         // false
4 !== 4        // false
4 != '4'       // false
4 == '4'       // true
4 === '4'      // false

let python = 'python';
let jargon = 'jargon';
if (python.length && jargon.length) {
  console.log("Both strings have a length");
} else {
  console.log("One or both strings have a falsy length");
}
