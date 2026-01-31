let produto = [
  { preco: 1000, nota: "B" },
  { preco: 900, nota: "A" },
];

let c = produto.reduce((a, b) => (a.preco > b.preco ? a : b));
console.log(c);
