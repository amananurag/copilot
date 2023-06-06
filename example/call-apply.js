function hello(message) {
  console.log(`${message} ${this.name}`);
}

const user = {
  name: "john",
};

hello.call(user, "hello");

function hello2(message, message2) {
  console.log(`${message} ${this.name} ${message2}`);
}

const user2 = {
  name: "john",
  score: 1234,
};

hello2.apply(user2, ["hello", "welcome"]);
