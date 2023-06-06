function* print() {
  yield "Hello";
  yield "World";
  yield "!";
}

const generator = print();

const iterator = generator[Symbol.iterator]();

const val = generator.next();
console.log(val);
