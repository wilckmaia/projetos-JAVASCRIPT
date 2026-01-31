let aluno = {
  nome: "Jordan",
  nota1: 4,
  nota2: 7,
};
function nota() {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  if (media >= 5) {
    console.log("aprovado");
  } else {
    console.log("reprovado");
  }
}

nota();
