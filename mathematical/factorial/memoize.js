let lookups;

function factorial(n) {
  lookups = lookups || new Array(n);
  if (n <= 1) {
    return 1;
  } else {
    lookups[n] = n * factorial(n - 1);
  }

  return lookups[n];
}

console.log(factorial(4));
console.log(factorial(3));
