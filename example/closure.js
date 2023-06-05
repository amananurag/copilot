function outer() {
  let counter = 0;
  function inner() {
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

function closure() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

closure();

function closure1() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

closure1();

function closure2() {
  for (var i = 1; i <= 5; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}

closure2();
