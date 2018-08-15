// Where n is the index and it starts at 0.
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(4)); // 5
console.log(fibonacci(3)); // 3
