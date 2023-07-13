function memoize() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n;
      return n;
    }
  };
}

console.log(memoize()(5));
console.log(memoize()(5));
