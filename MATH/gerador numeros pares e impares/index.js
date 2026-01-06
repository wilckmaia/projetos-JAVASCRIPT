function gerarParesImpares(n) {
  let pares = [];
  let impares = [];

  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 101);

    if (num % 2 === 0) {
      pares.push(num);
    } else {
      impares.push(num);
    }
  }

  console.log("Pares: " + pares);
  console.log("Ímpares: " + impares);
}

gerarParesImpares(10);
