class Estoque {
  constructor(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  entrada(e) {
    console.log("INICIAL " + this.quantidade);
    this.quantidade += e;
    console.log("ENTRDA " + e);
  }
  saida(e) {
    if (e <= this.quantidade) {
      this.quantidade -= e;
      console.log("SAIDA " + e);
    } else {
      console.log("quantidade insuficiente");
    }
  }
  getQ() {
    console.log("QUANTIDADE FINAL " + this.quantidade);
  }
}
let estoque = new Estoque("insider blusa preta", 100);
estoque.entrada(70);
estoque.saida(50);
estoque.getQ();
