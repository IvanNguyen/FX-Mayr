// function nhau_an_mung() {
//   return Promise.reject(500).catch(result => { console.log(result) });
// }

// // nhau_an_mung().catch(result => {
// //   console.log(result);
// // });
// nhau_an_mung();

var ee = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then(resp => {
  console.log(resp);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resp + 1);
    }, 1000);
  });
}).then(resp => {
  console.log(resp);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resp + 1);
    }, 1000);
  });
}).then(resp => {
  console.log(resp);
  return resp;
});

ee.then(resp => {
  console.log(resp);
});


// const makeRequest = () => {
//   return promise1 = Promise.resolve(10)
//     .then(value1 => {
//       // do something
//       console.log(value1);
//       return promise2 = Promise.resolve(value1 + 1)
//         .then(value2 => {
//           // do something
//           console.log(value2);
//           return promise3 = Promise.resolve(value1+value2+1);
//           // return value2;
//         })
//     })
//     .then(result => {
//       console.log(result);
//     })
// }
// makeRequest();