// create a custom object
const person1 = {
  x: "John",
  y: 22,
};

// write a function to loop the keys of the above object
function loopKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
const has = (obj, key) => {
  return key in obj;
};
console.log(loopKeys(person1));
console.log(has(person1, "x"));
