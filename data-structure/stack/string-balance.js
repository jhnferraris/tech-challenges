// Given a string containing '<' and '>' determine if the string is balance.
// <<<>>> -- balance
// <<> -- not balance

function isBalance(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case '<':
        stack.push(str.charAt(i));
        break;

      case '>':
        stack.pop();
        break;
      default:
        break;
    }
  }
  if (stack.length !== 0) {
    return 'not balance';
  }

  return 'balance';
}

console.log(isBalance('<<<a>>>')); // true
console.log(isBalance('<><'));
