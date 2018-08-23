// Given an input n,
// loop i from 1 to n and print fizz if the ith element is multiple of 3
// print buzz if the ith element is a multiple of 5
// print fizzbuzz if the ith element is a multiple of 3 and 5

const multipleOfN = require('../mathematical/multiple-of-n');

function fizzbuzz(n) {
  for (i = 1; i <= n; i++) {
    if (multipleOfN(i, 3) && multipleOfN(i, 5)) {
      console.log('FizzBuzz');
    } else if (multipleOfN(i, 3)) {
      console.log('Fizz');
    } else if (multipleOfN(i, 5)) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);
