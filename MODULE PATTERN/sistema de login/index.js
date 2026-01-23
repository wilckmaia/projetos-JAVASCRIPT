const Login = (function () {
  let logado = true / false;
  let estado = true / false;
  return {
    user(esta) {
      if (esta == "logado") {
        estado = true;
        return "|  logado     |";
      } else if (esta == "entrar") {
        estado = false;
        return "|  deslogado  |";
      }
    },
    online() {
      if (estado == true) {
        return "|  ONLINE  |";
      } else {
        return "|  OFFLINE |";
      }
    },
    funcao() {
      if (estado == true) {
        return "|    BOTAO: LOGOUT   |";
      } else {
        return "|    BOTAO: LOGIN    |";
      }
    },
  };
})();

console.log(Login.user("logado"), Login.online(), Login.funcao());
