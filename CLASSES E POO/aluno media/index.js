class Media {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  addNota(nota) {
    this.notas.push(nota);
    console.log(this.notas);
  }

  calcuMedia() {
    let a = (this.notas[0] + this.notas[1]) / this.notas.length;
    console.log(a);
  }
  foiAprovado() {
    if (this.notas >= 7) {
      console.log("Aluno aprovado");
    } else {
      console.log("Aluno reprovado");
    }
  }
}

let media = new Media("Wilck");
media.addNota(10);
media.addNota(9);
media.calcuMedia();
media.foiAprovado();
