function Contador(comeco) {
  this.comeco = comeco;

  this.incrementar = function (valor) {
    this.comeco += valor;
  };

  this.decrementar = function (valor) {
    this.comeco -= valor;
  };

  this.reset = function () {
    this.comeco = 0;
  };
}

const mais = new Contador(0);
mais.incrementar(100);
mais.decrementar(1);
console.log(mais.comeco);

const num1 = new Contador(0);
num1.incrementar(100);
num1.decrementar(1);
num1.reset();
console.log(num1.comeco);
