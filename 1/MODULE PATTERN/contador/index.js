const Contador = (function () {
  let valor = 0;
  return {
    incrementar(a) {
      valor += a;
    },
    decrementar(b) {
      if (b <= valor) {
        valor -= b;
      } else {
        valor = 0;
      }
    },
    mostrar() {
      console.log(valor);
    },
  };
})();

Contador.incrementar(10);
Contador.decrementar(50);
Contador.mostrar();
