function numeroPrimo(a) {
  if (a <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(numeroPrimo(17));
