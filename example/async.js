// example as how a callback works

let response = "";

async function fetchdatafromserver(url) {
  const response = await fetch(url);
  data = await response.json();
  return data;
}

//const response =  fetchdatafromserver('https://jsonplaceholder.typicode.com/todos/1'); // Promise {<pending>}
(async () => {
  try {
    response = await fetchdatafromserver(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  } catch (err) {
    console.log(err);
  }
})();
console.log(response);
