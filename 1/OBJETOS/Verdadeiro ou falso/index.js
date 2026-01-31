let usuario = {
  nome: "José",
  ativo: false / true,

  name() {
    this.ativo = true;
    console.log(this.ativo);
  },
};
usuario.name();
