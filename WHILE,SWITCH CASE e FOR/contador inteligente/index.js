let numeroInicial = 5;

for (let i = 0; i <= numeroInicial; i++) {
  console.log(i);
}

while (numeroInicial > 0) {
  console.log(numeroInicial);
  numeroInicial--;
  if (numeroInicial < 0) {
    break;
  }
}

switch (numeroInicial > 0) {
  case 1:
    console.log(numeroInicial++);
    break;
  case 2:
    console.log(numeroInicial + 10);
    break;
  default:
    console.log(numeroInicial + 100);
}
