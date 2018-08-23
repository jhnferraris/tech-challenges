let promise = string => {
  return new Promise(function(resolve, reject) {
    resolve(console.log(string));
  });
};

// let promise3 = new Promise(function(resolve, reject) {
//   return resolve(console.log('instant'));
// });

// let promise4 = new Promise(function(resolve, reject) {
//   return resolve(console.log('GG'));
// });

async function concurrency() {
  Promise.all(
    ['foo', 'asdfa', 'bar'].map(async string => {
      await promise(string);
    })
  ).then(async () => {
    await promise('hey');
  });
}

concurrency();
