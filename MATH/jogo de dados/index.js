function jogarDados() {
  let lancados = Math.ceil(Math.random(3) * 3);
  console.log(lancados);
  if (lancados === 1) {
    console.log(lancados + " Dado lançado");
    let dado1 = Math.ceil(Math.random(1) * 6);
    console.log("O numero que caiu foi : " + dado1);
  } else if (lancados === 2) {
    console.log(lancados + " Dados lançados");
    let dado1 = Math.ceil(Math.random(1) * 6);
    console.log("Dado 1 : " + dado1);
    let dado2 = Math.ceil(Math.random(1) * 6);
    console.log("Dado 2 : " + dado2);
  } else if (lancados === 3) {
    console.log(lancados + " Dados lançados");
    let dado1 = Math.ceil(Math.random(1) * 6);
    console.log("Dado 1 : " + dado1);
    let dado3 = Math.ceil(Math.random(1) * 6);
    console.log("Dado 2 : " + dado3);
    let dado4 = Math.ceil(Math.random(1) * 6);
    console.log("Dado 3 : " + dado4);
  }
}
jogarDados();
