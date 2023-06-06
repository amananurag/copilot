function asyncOperations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

function asyncOperations2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("done2");
    }, 500);
  });
}
function asyncOperations3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done3");
    }, 1500);
  });
}

Promise.race([asyncOperations(), asyncOperations2(), asyncOperations3()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
