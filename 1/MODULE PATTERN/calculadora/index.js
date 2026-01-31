const Calculadora = (function () {
  return {
    somar(valor, valor2) {
      return (valor += valor2);
    },
    subtrair(valor, valor2) {
      return (valor -= valor2);
    },
    multiplicar(valor, valor2) {
      return (valor *= valor2);
    },
    dividir(valor, valor2) {
      return (valor /= valor2);
    },
  };
})();
console.log(Calculadora.somar(5, 7));
