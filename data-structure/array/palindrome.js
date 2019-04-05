function isPalindrome(input) {
  const inputArray = input.split('');

  while (inputArray.length > 1) {
    const firstChar = inputArray.pop();
    const lastChar = inputArray.shift();
    if (firstChar != lastChar) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('radar'));
console.log(isPalindrome('-121'));
console.log(isPalindrome('121'));
console.log(isPalindrome('raar'));
