let numeroEscolhido = 1;

for (let i = 0; i <= 10; i++) {
  console.log(i * numeroEscolhido);
}
switch (numeroEscolhido < 5) {
  case 1:
    console.log(numeroEscolhido - numeroEscolhido);
    break;
  case 2:
    console.log(numeroEscolhido + numeroEscolhido);
    break;
  default:
    console.log(numeroEscolhido * numeroEscolhido);
}
