const products = [
  { name: "iPhone", price: 1000 },
  { name: "Samsung Galaxy", price: 800 },
  { name: "Google Pixel", price: 700 },
  { name: "OnePlus", price: 600 },
  { name: "Xiaomi", price: 500 },
];

const result = products
  .filter((product) => product.price > 800)
  .map((product) => product.name);
console.log(result);
