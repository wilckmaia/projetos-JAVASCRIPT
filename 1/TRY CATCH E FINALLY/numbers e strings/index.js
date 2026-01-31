function conversorDeString(valor) {
  if (typeof valor != "number" && isNaN(Number(valor))) {
    throw new Error("ERRO, insira um numero");
  }
  return String(valor);
}
try {
  console.log(conversorDeString(60));
} catch (e) {
  console.log(e.message);
} finally {
  console.log("RODOU");
}
