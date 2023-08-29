const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 10];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function removeDuplicates2(arr) {
  return Array.from(new Set(arr));
}

function removeDuplicates3(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicates3(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicates4(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
