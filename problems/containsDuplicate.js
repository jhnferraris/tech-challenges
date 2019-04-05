// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct
function containsDuplicate(inputArr) {
  let sortedArr = inputArr.sort();

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i - 1] == sortedArr[i]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 1])); // true
console.log(containsDuplicate([2, 2, 5, 1, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
