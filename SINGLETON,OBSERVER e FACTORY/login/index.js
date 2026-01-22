/*SINGLETON */
const cache = (function () {
  let dados = {};

  return {
    inserir(chave, valor) {
      if (!dados[chave]) {
        dados[chave] = valor;
      }
      return dados[chave];
    },
    pegar() {
      return dados;
    },
  };
})();

const a = cache.inserir("nome", "Gates");
const b = cache.inserir("nome", "Musk");
const c = cache.pegar();
console.log(a, b, c);
