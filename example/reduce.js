// reduce to find sum in array
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
const max = arr.reduce((acc, curr) => {
  if (acc < curr) return curr;
  return acc;
}, 0);
