let produto = {
  nome: "iphone",
  preco: 1000,
};

function desconto() {
  let p = produto.preco * 0.1;
  let desconto10 = produto.preco - p;
  console.log(desconto10);
}
desconto();
