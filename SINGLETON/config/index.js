const Config = (function () {
  let instancia;
  function criarInstancia() {
    return {
      tema: "Dark",
      idioma: "PT-BR",
      user: 0,
      msg: function () {
        console.log(`${this.user} logado simultaneamente`);
      },
    };
  }
  return {
    pegarInstancia() {
      if (!instancia) {
        instancia = criarInstancia();
      }
      return instancia;
    },
  };
})();

const o = Config.pegarInstancia();
o.user++;
o.msg();
const a = Config.pegarInstancia();
a.user++;
a.msg();
const b = Config.pegarInstancia();
b.user++;
b.msg();
console.log(o, a, b);
