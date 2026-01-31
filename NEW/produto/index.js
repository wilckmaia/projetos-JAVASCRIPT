function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  this.vender = function (valor) {
    this.estoque -= valor;
  };

  this.repor = function (valor) {
    this.estoque += valor;
  };
}

let produto = new Produto("Windows", 3000, 50000);
produto.vender(1000);
produto.repor(820);
console.log(produto.nome, produto.preco, produto.estoque);
