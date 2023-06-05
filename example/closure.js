function outer() {
  let counter = 0;
  function inner() {
    console.log("counter", counter);
    counter++;
    return counter;
  }

  return inner;
}

const run = outer();

run();
run();

const run2 = outer();
run2();
run2();
