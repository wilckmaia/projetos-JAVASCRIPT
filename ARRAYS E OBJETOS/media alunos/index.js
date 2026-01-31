let alunos = [
  { aluno: "Wilck", nota: 10 },
  { aluno: "Gates", nota: 10 },
  { aluno: "buffet", nota: 10 },
];
function media() {
  let m = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / alunos.length;
  console.log("A média de todos os aluno é igual a : " + m);
}

media();
