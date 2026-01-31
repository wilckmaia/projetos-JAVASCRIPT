/*OBSERVER*/
class Canal {
  constructor() {
    this.observers = [];
  }
  inscrito(a) {
    this.observers.push(a);
  }
  notifica(data) {
    this.observers.forEach((a) => a(data));
  }
}
const canal = new Canal();
canal.inscrito((msg) => console.log("A", msg));
canal.inscrito((msg) => console.log("B", msg));
canal.notifica("Novo video");
