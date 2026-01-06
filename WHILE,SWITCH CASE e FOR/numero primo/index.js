//numero primo
let numero = 29;
let divisores = 0;
for (let i = 0; i <= numero; i++) {
  if (numero % i === 0) {
    divisores++;
  }
}
if (divisores === 2) {
  switch (true) {
    case true:
      console.log("numero primo");
      break;
  }
} else {
  switch (true) {
    case true:
      console.log("nao é primo");
      break;
  }
}
