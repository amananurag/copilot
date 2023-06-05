// reduce to find sum in array
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
const max = arr.reduce((acc, curr) => {
  if (acc < curr) return curr;
  return acc;
}, 0);

const ar = [
  { name: "a", age: 10 },
  { name: "b", age: 20 },
  { name: "c", age: 30 },
  { name: "d", age: 20 },
];
// sample = {10: 1, 20: 2, 30: 1}

const result = ar.reduce((acc, curr) => {
  const { age } = curr;
  if (acc[age]) {
    acc[age] += 1;
  } else {
    acc[age] = 1;
  }

  return acc;
}, {});

console.log(result);
