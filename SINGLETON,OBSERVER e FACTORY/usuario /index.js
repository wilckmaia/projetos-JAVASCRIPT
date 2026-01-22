const dados = (function () {
  let i;
  function daDos() {
    return { id: 1, nome: "Steve", status: "Online" };
  }
  return {
    login() {
      if (!i) {
        i = daDos();
      }
      return i;
    },
  };
})();
const a = dados.login();
const b = dados.login();
const c = !a;
console.log(a, b, c);
