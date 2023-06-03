function asyncOperations() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

function asyncOperations2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done2");
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
