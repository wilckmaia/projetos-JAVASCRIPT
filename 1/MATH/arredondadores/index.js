function arredondaor(a) {
  let primeiro = Math.floor(a);
  let segundo = Math.ceil(a);
  let terceiro = Math.round(a);
  let quarto = Math.trunc(a);
  console.log(primeiro);
  console.log(segundo);
  console.log(terceiro);
  console.log(quarto);
}
arredondaor(9.7);
