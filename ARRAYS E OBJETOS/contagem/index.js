const numeros = [1, 2, 2, 3, 3, 3];
const contagem = {};

numeros.forEach((num) => {
  contagem[num] = (contagem[num] || 0) + 1;
});

console.log(contagem);
