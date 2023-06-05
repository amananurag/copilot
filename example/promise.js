async function asyncOperations() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

async function asyncOperations2() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done2");
    }, 500);
  });
}

async function asyncOperations3() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done3");
    }, 1500);
  });
}
// promise chaining - return is important else fulfillment handler will be undefined
const result = asyncOperations()
  .then((result) => {
    console.log(result);
    return asyncOperations2();
  })
  .then((result) => {
    console.log(result);
    return asyncOperations3();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(result);
