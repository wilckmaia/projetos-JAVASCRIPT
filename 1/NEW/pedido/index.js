function Pedido() {
  this.total = [];

  this.item = function (a) {
    this.total.push(a);
  };
  this.calculo = function () {
    return this.total.length;
  };
  this.remover = function () {
    this.total.pop();
  };
}

const pedido = new Pedido();
pedido.item("Vasoura");
pedido.item("Pano");
pedido.calculo();
pedido.remover();
console.log(pedido.total, pedido.calculo());
