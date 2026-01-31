let conta = {
  saldo: 1000,
};
function depositar(a) {
  let desp = conta.saldo + a;
  console.log(
    "De R$" + conta.saldo + " Despositou R$" + a + " Total R$" + desp
  );
}
function sacar(a) {
  let sac = conta.saldo - a;
  console.log("De R$" + conta.saldo + " Sacou R$" + a + " Total R$" + sac);
}

depositar(100);
sacar(999);
