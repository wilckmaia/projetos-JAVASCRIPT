class Registro {
  constructor() {
    this.agregado = [];
  }

  add(novaAcao) {
    this.agregado.push(novaAcao);
  }
  mostrar(msg) {
    this.agregado.forEach((u) => u.result(msg));
  }
}

class Acoes {
  constructor(acao) {
    this.acao = acao;
  }
  result(msg) {
    console.log(`AÇÂO: ${this.acao} | RESULTADO: ${msg}`);
  }
}
const r = new Registro();
const acao1 = new Acoes("Pular");
const acao2 = new Acoes("Caminhar");
r.add(acao1);
r.add(acao2);
r.mostrar("cansado");
