function missingNumber(inputArr) {
  const sortedArr = inputArr.sort();
  let possibleNextNumber = sortedArr[0];
  for (i = 0; i < sortedArr.length; i++) {
    if (possibleNextNumber != sortedArr[i]) {
      return possibleNextNumber;
    } else {
      possibleNextNumber++;
    }
  }
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
