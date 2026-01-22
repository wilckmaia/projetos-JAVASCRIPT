/* SINGLETON (GARANTE A EXISTENCIA DE SÓ 1 OBJETO)*/
const config = (function () {
  let instance;
  function create() {
    return { theme: "dark" };
  }
  return {
    getInstance() {
      if (!instance) {
        instance = create();
      }
      return instance;
    },
  };
})();

const a = config.getInstance();
const b = config.getInstance();
const c = a != b;
console.log(a, b, c);
