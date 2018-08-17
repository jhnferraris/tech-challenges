// Where n is the index and it starts at 0.
function fibonacci(n) {
  let lookups = new Array(n);
  lookups[0] = 1;
  lookups[1] = 1;

  for (let i = 2; i <= n; ++i) {
    lookups[i] = lookups[i - 2] + lookups[i - 1];
  }
  return lookups[n];
}

console.log(fibonacci(4)); // 5
console.log(fibonacci(3)); // 3
