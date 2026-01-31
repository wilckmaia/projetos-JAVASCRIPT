function nota(a) {
  switch (true) {
    case a >= 9:
      console.log("Excelente, aluno acima da média");
      break;
    case a >= 5:
      console.log("Aluno aprovado");
      break;
    case a < 3:
      console.log("Aluno reprovado");

      break;
    case a < 5:
      console.log("Recuperação");
  }
}
nota(5);
