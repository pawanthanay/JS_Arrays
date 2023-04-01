const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// remove 'Honey' if you are allergic to honey
const index = shoppingCart.indexOf('Honey');
if (index !== -1) {
  shoppingCart.splice(index, 1);
}

// modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart); // Output: ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']
