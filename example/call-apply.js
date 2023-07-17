function hello(message) {
  console.log(`${message} ${this.name}`);
}

const user = {
  name: "john",
};
// call can only pass on1 arguement
hello.call(user, "hello");
function hello2(message, message2) {
  console.log(`${message} ${this.name} ${message2}`);
}

const user2 = {
  name: "john",
  score: 1234,
};
// apply can pass x argueents as an array
hello2.apply(user2, ["hello", "welcome"]);
