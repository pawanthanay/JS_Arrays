let x = 10;
if (x) {
  console.log("x is truthy");
}

let y = "Hello";
if (y.length) {
  console.log("y is truthy");
}

let z = [1, 2, 3];
if (z.length) {
  console.log("z is truthy");
}

let a = false;
if (!a) {
  console.log("a is falsy");
}

let b = 0;
if (!b) {
  console.log("b is falsy");
}

let c = "";
if (!c) {
  console.log("c is falsy");
}
