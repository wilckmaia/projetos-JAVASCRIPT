class Alerta {
  constructor() {
    this.notificar = [];
  }
  alerto(alertar) {
    this.notificar.push(alertar);
  }
  notifico(msg) {
    this.notificar.forEach((u) => u.notificar(msg));
  }
}

class Display {
  constructor(tipoDoAlerta) {
    this.tipoDoAlerta = tipoDoAlerta;
  }
  notificar(msg) {
    console.log(`ALERTA DE : ${this.tipoDoAlerta}   capitado:   ${msg}`);
  }
}
const tipo = new Display("Perigo");
const alerta = new Alerta();
alerta.alerto(tipo);
alerta.notifico("AAAAAAAAAAAA");
