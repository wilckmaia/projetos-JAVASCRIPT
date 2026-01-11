let compras = {
  produto: "macbook",
  valor: 1900,
  data: "10/01/2026",
};

let conta = 10000;

function compra() {
  return conta - compras.valor;
}

console.log(
  "Com a compra os seus gastos foram :" +
    compras.valor +
    " E sua conta esta com saldo de :" +
    compra()
);
