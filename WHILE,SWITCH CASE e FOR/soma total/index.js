let soma = 0;
let a = 1;

function somaTotal() {
  for (let i = 1; i <= 99; i++) {
    console.log(a + i);
    soma += i;
    console.log("Soma Total = " + soma);
  }

  for (let j = 100; j >= 1; j--) {
    console.log(j - a);
    soma += j;
    console.log("Soma Total = " + soma);
  }
}
somaTotal();
