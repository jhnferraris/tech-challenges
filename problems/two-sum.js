// Given an array of integers, return indices of the two numbers
/// such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// Brute-Force
function twoSums(inputArray, target) {
  for (let i = 0; i < inputArray.length; i++) {
    let firstAddend = inputArray[i];
    for (let j = 1; j < inputArray.length; j++) {
      let secondAddend = inputArray[j];
      if (firstAddend != secondAddend && firstAddend + secondAddend === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(twoSums([1, 2, 3, 4, 5], 7)); // [1, 4]
console.log(twoSums([1, 1, 2, 0], 2)); // [2, 3]
