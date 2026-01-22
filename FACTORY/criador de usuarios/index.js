class Admin {
  constructor(nome) {
    this.nome = nome;
  }
  permissoes() {
    console.log(`${this.nome} é o Admin e possue todas a permissoes`);
  }
}

class Editor {
  constructor(nome) {
    this.nome = nome;
  }
  permissoes() {
    console.log(`${this.nome} é o Editor e só tem a permissao de editar`);
  }
}

class Visitante {
  constructor(nome) {
    this.nome = nome;
  }
  permissoes() {
    console.log(`${this.nome} é o Visitante e só pode observar`);
  }
}
class CriarUsuario {
  static criarUsers(funcao, nome) {
    switch (funcao) {
      case "Editor":
        return new Editor(nome);
      case "Visitante":
        return new Visitante(nome);
      case "Admin":
        return new Admin(nome);
      default:
        throw new Error("Tipo desconhecido");
    }
  }
}

const user1 = CriarUsuario.criarUsers("Admin", "Wilck");
user1.permissoes();
