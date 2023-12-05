// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

//const randomNumberPromise = new Promise(function(resolve, reject) {
const myPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    const randomVal = Math.random()
    if (randomVal > 0.5) {
      resolve(randomVal);
    } else if (randomVal <= 0.5) {
      reject(new Error(`Fail, RandomVal: ${randomVal} <= 0.5`));
    }
  }, 1000)
});

myPromise.then((value) => {
  console.log(`Success!, ${value} > 0.5`)
}).catch((value) => {
  console.log(value);
});
