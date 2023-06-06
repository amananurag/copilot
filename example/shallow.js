const person = {
  name: "john",
  country: "USA",
  score: 1234,
  hobbies: ["reading", "music"],
};

const person2 = {};

Object.assign(person2, person);
console.log(person.name);
console.log(person2.name);

person.name = "bob";
console.log(person.name);
console.log(person2.name);

person.hobbies.push("sports");

console.log(person.hobbies);
console.log(person2.hobbies);
