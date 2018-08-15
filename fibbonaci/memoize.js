// Where n is the index and it starts at 0.
let lookups;
function fibonacci(n) {
  lookups = lookups || new Array(n);
  if (n <= 1) {
    return 1;
  } else {
    lookups[n] = fibonacci(n - 2) + fibonacci(n - 1);
  }

  return lookups[n];
}

console.log(fibonacci(4)); // 5
console.log(fibonacci(3)); // 3
