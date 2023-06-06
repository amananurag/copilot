function hello(hello) {
  console.log(`${hello} ${this.name}`);
}

const user = {
  name: "john",
};
// bind will bind the object reference to the function and return a new function
const greet = hello.bind(user);
const val = greet("hello");
