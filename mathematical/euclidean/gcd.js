function gcd_euclidean_division(a, b) {
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

console.log(gcd_euclidean_division(1071, 462));

function gcd_recursive(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd_recursive(b, a % b);
}

console.log(gcd_recursive(1071, 462));
