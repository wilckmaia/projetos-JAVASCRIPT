class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log("Seu saldo após o deposito é: " + this.saldo);
  }
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Seu saldo após o saque é: " + this.saldo);
    } else if (valor > this.saldo) {
      console.log("ERRO, saldo insuficiente");
    }
  }
  verSaldo() {
    console.log("Saldo atual: " + this.saldo);
  }
}
let contaBanco = new ContaBancaria("Vegeta", 1000);
console.log("Saldo inicial: " + contaBanco.saldo);
contaBanco.depositar(1000);
contaBanco.sacar(10000);
contaBanco.verSaldo();
