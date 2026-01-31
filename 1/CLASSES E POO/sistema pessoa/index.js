class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  ano() {
    let i = this.idade + 1;
    console.log("Feliz aniverssario " + this.nome + " Agora tem : " + i);
  }
}
let pessoa = new Pessoa("phelps", 17);
pessoa.ano();
