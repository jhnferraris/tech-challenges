// Determine the length of n where n >= 0
// without converting it as a string or using loop
// Source: https://jstrieb.github.io/posts/digit-length/

function digitLength(n) {
  return n === 0 ? 1 : Math.floor(Math.log10(n) + 1);
}

console.log(digitLength(0));
console.log(digitLength(5));
console.log(digitLength(10));
console.log(digitLength(2356));
