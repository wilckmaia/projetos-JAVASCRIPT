let json = {
  entradas: 1000,
  saidas: 10000,
};

function saldoResultado(o) {
  let r = o + json.entradas;
  let s = r - json.saidas;

  console.log("Saldo inicial : " + o);
  console.log("Saldo inicial após entradas : " + r);
  console.log("Saldo inicial após saidas : " + s);

  if (s >= 0) {
    console.log("Saldo positivo");
  } else {
    console.log("Saldo negativo");
  }
}

saldoResultado(0);
