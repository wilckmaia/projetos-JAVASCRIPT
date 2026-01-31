const Usuario = (function () {
  let instancia;

  function criarUser(nome, idade, status) {
    return {
      nome,
      idade,
      status,
    };
  }

  return {
    novoUser(nome, idade, status) {
      if (!instancia) {
        instancia = criarUser(nome, idade, status);
      }
      return instancia;
    },
  };
})();

const user1 = Usuario.novoUser("Wilck", 18, true);
const user2 = Usuario.novoUser("Outro", 25, false);

console.log(user1);
console.log(user2);
