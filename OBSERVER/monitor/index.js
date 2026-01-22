class Monitor {
  constructor() {
    this.changeds = [];
  }

  mudar(m) {
    this.changeds.push(m);
  }

  enviarNotificacao(msg) {
    this.changeds.forEach((u) => u.notificar(msg));
  }
}

class Base {
  constructor(mu) {
    this.mu = mu;
  }

  notificar(msg) {
    console.log(`${this.mu} recebeu: ${msg}`);
  }
}

const c1 = new Monitor();
const a = new Base("Background: dark");

c1.mudar(a);
c1.enviarNotificacao("Background Ligth");
