let numero = 123456;
let contador = 0;

while (numero > 0) {
  numero = Math.floor(numero / 10);
  contador++;
}

console.log(contador);
