function factorial(n) {
  let lookups = new Array(n);
  lookups[0] = 1;
  lookups[1] = 1;

  for (let i = 1; i <= n; i++) {
    lookups[i] = i * lookups[i - 1];
  }

  return lookups[n];
}

console.log(factorial(4));
console.log(factorial(3));
