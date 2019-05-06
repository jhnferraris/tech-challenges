// Given a non-zero positive integer, return its corresponding Roman numeral
// JS version of https://github.com/chubbysingh/coding/blob/master/src/Leetcode/Q012_Integer_to_Roman.java
const intToRoman = num => {
  var romanString = '';
  const groups = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const groupString = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i < groups.length; i++) {
    while (num >= groups[i]) {
      romanString = `${romanString}${groupString[i]}`;
      num -= groups[i];
    }
  }
  return romanString;
};

console.log(intToRoman(1995));
console.log(intToRoman(2000));
console.log(intToRoman(1895));
