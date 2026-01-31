let compras = [
  { itens: "Banana e Maçã", quantidade: 2 },
  { itens: "Carro e Copo stanley", quantidade: 2 },
];
function quantos() {
  return compras[0].quantidade + compras[1].quantidade;
}

console.log(quantos());
