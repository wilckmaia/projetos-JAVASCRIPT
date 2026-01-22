function Contabancaria(saldo) {
  this.saldo = saldo;

  this.depositar = function (valor) {
    this.saldo += valor;
  };
  this.saque = function (valor) {
    this.saldo -= valor;
  };
}

let conta1 = new Contabancaria(100);
conta1.depositar(100);

let conta2 = new Contabancaria(100);
conta2.depositar(100);
conta2.saque(50);

console.log(conta1.saldo);
console.log(conta2.saldo);
