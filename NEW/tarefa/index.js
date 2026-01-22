function Tarefa(titulo, status) {
  this.titulo = titulo;
  this.status = status;

  this.concluir = function () {
    if (
      this.status == "concluida" ||
      this.status == "Concluida" ||
      this.status == "CONCLUIDA"
    ) {
      this.concluir = "TAREFA CONCLUIDA";
    } else if (
      this.status == "fazendo" ||
      this.status == "Fazendo" ||
      this.status == "FAZENDO"
    ) {
      this.concluir = "TERMINE A TAREFA";
    } else {
      this.concluir = "COMEÇE A TAREFA";
    }
  };

  this.reabrir = function (valor) {
    if (
      valor == "Reabrir" ||
      valor == "reabrir" ||
      (valor == "REABRIR" && this.concluir == "TAREFA CONCLUIDA")
    ) {
      this.reabrir = "TAREFA REABERTA";
    } else if (
      valor == "Reabrir" ||
      valor == "reabrir" ||
      (valor == "REABRIR" && this.concluir == "TERMINE A TAREFA") ||
      this.concluir == "COMEÇE A TAREFA"
    ) {
      this.reabrir = "TAREFA NAO FINALIZADA";
    } else {
      this.reabrir = ".";
    }
  };
}

const t1 = new Tarefa("Lmpar a sala", "concluida");
t1.concluir();
t1.reabrir("");
console.log(t1);
