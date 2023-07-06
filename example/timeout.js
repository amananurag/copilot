const mstimeout = 3000;

const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("timeout"));
  }, mstimeout);
});

const api = fetch("https://jsonplaceholder.typicode.com/todos/1");

Promise.race([timeout, api])
  .then((response) => {
    //   console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
