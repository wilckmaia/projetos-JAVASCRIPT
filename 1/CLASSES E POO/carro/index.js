class Carro {
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelerar(valor) {
    console.log(`Começo:  ${this.velocidade}`);
    this.velocidade += valor;
    console.log(`Meio:  ${this.velocidade}`);
  }
  frear(valor) {
    this.velocidade -= valor;
  }
  getVelocidade() {
    console.log(`Final:  ${this.velocidade}`);
  }
}
let carro = new Carro("TESLA", 0);
carro.acelerar(100);
carro.frear(49);
carro.getVelocidade();
