function dividir(a, b) {
  if (b <= 0) {
    throw new Error("Troque o denominador");
  }
  return a / b;
}

try {
  console.log(dividir(10, 10));
} catch (e) {
  console.log(e.message);
} finally {
  console.log("FEITO");
}
