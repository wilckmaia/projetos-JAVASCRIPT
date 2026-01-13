class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
  aumentarSalario(porcentagem) {
    let i = (this.salario * porcentagem) / 100;
    let b = i + this.salario;
    console.log(`Antigo salario ${this.salario},  Novo salario ${b}`);
    this.salario = b;
  }
  getSalario() {
    console.log(this.salario);
  }
}
let funcionario = new Funcionario("Copernico", 1200);
funcionario.aumentarSalario(10);
funcionario.getSalario();
