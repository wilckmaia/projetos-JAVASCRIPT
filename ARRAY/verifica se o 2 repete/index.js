const array = [1, 2, 2, 3, 2];

let contador = 0;
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);

  if (array[i] === 2) {
    contador++;
    console.log("Elemento : ", array[i], " aparece ", contador, " vez(es)");
  }
}
