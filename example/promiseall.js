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

function asyncOperationsFetch() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response, error) => {
      console.log(response.json());
      response.json();
    }
  );
}

function asyncOperationsFetch2() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (result) => {
      result.json();
    }
  );
}

function asyncOperationsFetch3() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (result) => {
      result.json();
    }
  );
}
Promise.all([
  asyncOperationsFetch(),
  asyncOperationsFetch2(),
  asyncOperationsFetch3(),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
