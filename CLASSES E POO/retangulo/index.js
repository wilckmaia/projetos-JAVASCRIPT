class Retangulo {
  constructor(base, altura) {
    this.altura = altura;
    this.base = base;
  }
  calcularArea() {
    let area = this.base * this.altura;
    console.log(`Area Retangulo =  ${area} `);
  }
}
let retangulo = new Retangulo(10, 10);
retangulo.calcularArea();
