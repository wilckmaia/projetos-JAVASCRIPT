function jurosCompostos(valorInicial, taxa, meses) {
  console.log("Valor inicial : " + valorInicial);
  let juros = valorInicial * Math.pow(1 + taxa, meses);
  console.log("Valor após " + meses + " meses : " + juros.toFixed(2));
  let lucro = juros - valorInicial;
  console.log("Lucro = " + lucro.toFixed(2));
}
jurosCompostos(1000, 0.1, 12);
//a taxa precisa ser coocada em for de 0.00... , nao em %, como 50%
