const array = [1, 2, 3, 4, 50];
const procurar = array.map((n) => {
  if (n % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
});
console.log(procurar);
