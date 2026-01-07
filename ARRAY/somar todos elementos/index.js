const array = [1, 2, 3, 4, 5];
let soma = 0;

function somarArray() {
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
    console.log(soma);
  }
  console.log("A soma de todos os elemento do array é : ", soma);
}
somarArray();
