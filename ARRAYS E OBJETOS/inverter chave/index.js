const obj = { a: 1, b: 2, c: 3 };
const invertido = {};

for (let key in obj) {
  invertido[obj[key]] = key;
}

console.log(invertido);
