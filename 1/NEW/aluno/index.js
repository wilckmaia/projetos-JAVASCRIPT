function Aluno() {
  this.notas = [];

  this.add = function (p, a, v, b) {
    this.notas.push(p);
    this.notas.push(a);
    this.notas.push(v);
    this.notas.push(b);
    this.add = "notas adicionadas";
  };
  this.media = function () {
    this.media =
      (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) /
      this.notas.length;
  };
  this.aprovacao = function () {
    if (this.media >= 9) {
      this.aprovacao = "APROVADO COM EXCELENCIA";
    } else if (this.media >= 5) {
      this.aprovacao = "APROVADO";
    } else {
      this.aprovacao = "REPROVADO";
    }
  };
}
const aluno = new Aluno();
aluno.add(10, 10, 10, 10);
aluno.media();
aluno.aprovacao();
console.log(aluno);
