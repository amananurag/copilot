const iterable = {
  [Symbol.iterator]() {
    // returns an iterator object
    let count = 0;
    return {
      next() {
        count += 1;
        if (count <= 5) {
          return { done: false, value: count };
        }
        return { done: true, value: undefined };
      },
    };
  },
};

for (const item of iterable) {
  console.log(item);
}

const iterator = iterable[Symbol.iterator]();
var val = iterator.next();
console.log(val);
