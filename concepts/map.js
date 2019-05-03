// Problem: Sort the elements of an object using their values.
// It should return an iterable data in which you can see the sorted elements from the input object
// Example: {1: 'z', 2: 'b', 3: 'a', 4: 'c'}
// Result: {3:'a', 2: 'b', 4: 'c', 1: 'z'}

function sortObjIterable(obj) {
  const objEntries = Object.entries(obj);

  // Simple Bubble Sort. LOL
  for (let i = 0; i < objEntries.length; i++) {
    for (let j = 0; j < objEntries.length; j++) {
      if (objEntries[i][1] < objEntries[j][1]) {
        let temp = objEntries[i];
        objEntries[i] = objEntries[j];
        objEntries[j] = temp;
      }
    }
  }

  // Since Object is unordered collection, we need to move the entries to a Map.
  let result = new Map();
  for (let i = 0; i < objEntries.length; i++) {
    result.set(objEntries[i][0], objEntries[i][1]);
  }

  return result;
}

console.log(
  sortObjIterable({
    1: 'd',
    2: 'a',
    3: 'b',
    4: 'c'
  })
);
console.log(sortObjIterable({ 1: 'z', 2: 'b', 3: 'a', 4: 'c' }));
