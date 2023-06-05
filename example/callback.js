// example as how a callback works
let response = "";
function fetchdatafromserver(url, callback) {
  fetch(url)
    .then((response, error) => {
      // if (error) throw new Error("Error in fetching data");
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function callback(data) {
  console.log(data);
  response = data;
}
fetchdatafromserver("https://jsonplaceholder.typicode.com/todos/1", callback);
