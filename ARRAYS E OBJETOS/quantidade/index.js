const nome = ["a", "b", "c"];
let obj = {};

nome.forEach((n) => (obj[n] = n.length));
console.log(obj);
