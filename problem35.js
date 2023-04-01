function areAllItemsUnique(arr) {
    const set = new Set(arr); // create a set to remove duplicates
    return set.size === arr.length; // check if set size equals original array length
}


const arr1 = [1, 2, 3, 4, 5];
console.log(areAllItemsUnique(arr1)); // true

const arr2 = [1, 2, 3, 4, 4, 5];
console.log(areAllItemsUnique(arr2)); // false
