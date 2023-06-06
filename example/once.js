function once() {
  let counter = 0;
  let hasbeencalled = false;

  function inner() {
    counter++;
    if (hasbeencalled) {
      return "Already called once";
    } else {
      hasbeencalled = true;
      return counter;
    }
  }
  return inner;
}

const run = once();
console.log(run());
console.log(run());
