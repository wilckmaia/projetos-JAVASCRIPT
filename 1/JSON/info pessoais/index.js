let loginPessoal = {
  nome: "tai",
  idade: 19,
  cep: 123456789,
  email: "asif@afspa",
};

let infoPublicas = loginPessoal.nome + " " + loginPessoal.idade;
console.log(infoPublicas);
let novo = {
  nome: loginPessoal.nome,
  idade: loginPessoal.idade,
};
console.log(novo);
