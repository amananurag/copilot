function add(x, y) {
  return x + y;
}

const sum = add.bind(null, 1);

console.log(sum(4));
