const Nome = (function () {
  let nome = "";
  return {
    criarNome(name) {
      nome = name;
      return nome;
    },
  };
})();

console.log(Nome.criarNome("WILCK"));
