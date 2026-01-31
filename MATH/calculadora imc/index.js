function imc(peso, altura) {
  let quadrado = Math.pow(altura, 2);
  let calculo = peso / quadrado;
  console.log(calculo);
}
imc(60, 1.7);
