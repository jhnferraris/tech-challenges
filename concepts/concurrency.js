let promise = string => {
  return new Promise(function(resolve, reject) {
    resolve(console.log(string));
  });
};

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
