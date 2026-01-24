const obj = {
  nome: "1",
  idade: "2",
};

function acessar(a) {
  if (a == false) {
    throw new Error("ERRO");
  }
  return obj;
}
try {
  console.log(acessar(false));
} catch (e) {
  console.log("ERRO" + "  " + e.message);
} finally {
  console.log("FINALIZADO");
}
