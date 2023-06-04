async function asyncOperations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done1");
    }, 500);
  });
}

async function asyncOperations2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done2");
    }, 500);
  });
}

async function asyncOperations3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done3");
    }, 500);
  });
}

Promise.all([asyncOperations(), asyncOperations2(), asyncOperations3()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
