let n = 0;
let somatudo = 0;
function soma(a) {
  for (let i = 0; i <= a; i++) {
    somatudo += i;
    n++;
    let r = n + i;
    console.log(
      "Acumulativo = " + somatudo + " Soma " + n + " + " + i + " = " + r
    );

    if (somatudo === a) {
      console.log(somatudo + " É o seu numero inicial");
    }
  }
}
soma(10);
