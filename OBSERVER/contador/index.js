class Contador {
  constructor() {
    this.valor = 0;
    this.observers = [];
  }

  adicionarObserver(observer) {
    this.observers.push(observer);
  }

  incrementar(n) {
    this.valor += n;
    this.notificar();
  }

  notificar() {
    this.observers.forEach((o) => o.mostrar(this.valor));
  }
}
class Display {
  mostrar(valor) {
    console.log(`Display recebeu: ${valor}`);
  }
}
const contador = new Contador();
const display = new Display();

contador.adicionarObserver(display);
contador.incrementar(10);
contador.incrementar(100);
