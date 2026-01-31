/*OBSERVERssuem estagios, com */

class Mudanca {
  constructor() {
    this.observers = [];
  }

  usuario(fn) {
    this.observers.push(fn);
  }

  estado(status) {
    if (status === true) {
      this.observers.forEach((fn) => fn("ATIVO"));
    } else {
      this.observers.forEach((fn) => fn("INATIVO"));
    }
  }
}

const mudanca = new Mudanca();

mudanca.usuario((msg) => console.log("USER1", msg));
mudanca.usuario((msg) => console.log("USER2", msg));

mudanca.estado(true);
mudanca.estado(false);
