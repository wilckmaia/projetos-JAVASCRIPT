let json = {
  produto: "Amazon box",
  quantidade: 100,
};
let estoque = json.quantidade;
function vendas(a) {
  return json.quantidade - a;
}
console.log("Estoque pós vendas :" + vendas(90));
function reposicoes(b) {
  return json.quantidade - b;
}
console.log("Estoque de reposição :" + reposicoes(50));

console.log("Estoque pós reposição :", estoque - 40);
