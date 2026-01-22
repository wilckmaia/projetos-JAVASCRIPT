function Carro(veloAtual) {
  this.veloAtual = veloAtual;

  this.acelerar = function (params) {
    this.veloAtual += params;
  };
  this.frear = function (params) {
    this.veloAtual >= params
      ? (this.veloAtual -= params)
      : (this.veloAtual = 0);
  };
}

const carro1 = new Carro(10);
carro1.acelerar(100);
carro1.frear(70);
console.log(carro1.veloAtual);
