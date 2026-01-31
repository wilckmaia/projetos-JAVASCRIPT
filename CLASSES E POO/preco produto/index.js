class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  aplicarDesconto(des) {
    let i = (this.preco * des) / 100;
    this.preco = this.preco - i;
  }

  getPrecoFinal() {
    console.log(this.preco);
  }
}

let desconto = new Produto("mycrosoft", 1000);
desconto.aplicarDesconto(50);
desconto.getPrecoFinal();
