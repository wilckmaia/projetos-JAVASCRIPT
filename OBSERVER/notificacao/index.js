class Telefone {
  constructor() {
    this.usuarios = [];
  }

  entrar(usuario) {
    this.usuarios.push(usuario);
  }

  enviarNotificacao(msg) {
    this.usuarios.forEach((u) => u.notificar(msg));
  }
}

class User {
  constructor(nome) {
    this.nome = nome;
  }

  notificar(msg) {
    console.log(`${this.nome} recebeu: ${msg}`);
  }
}

const c1 = new Telefone();
const a = new User("John");

c1.entrar(a);
c1.enviarNotificacao("Olá");
