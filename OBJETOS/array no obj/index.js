let agenda = {
  contatos: ["primeiro", "segundo", "terceiro", "quarto", "quinto"],
  add() {
    this.contatos.unshift("novo");
    console.log(this.contatos);
  },
};
agenda.add();

function novo() {
  agenda.contatos.unshift("NOVO");

  console.log(agenda.contatos);
}

novo();
