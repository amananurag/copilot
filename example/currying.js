function add(x, y) {
  return x + y;
}

const sum = add.bind(null, 1);
// initial arguement will be remembered
console.log(sum(4));
