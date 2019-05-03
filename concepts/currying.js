// Source: https://www.sitepoint.com/currying-in-functional-javascript/

// Sum of 3 numbers using currying

const sumOf3 = x => {
  return y => {
    return z => {
      return x + y + z;
    };
  };
};

console.log(sumOf3(4)(5)(1)); // 10
console.log(sumOf3(0)(1)(4)); // 5
console.log(sumOf3(1)(2)); // [Function]
