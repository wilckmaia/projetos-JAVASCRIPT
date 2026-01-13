class Livro {
  constructor(autor) {
    this.titulo = [];
    this.autor = autor;
  }
}
class Biblioteca extends Livro {
  adicionar(livro) {
    console.log(`${livro} , ADICIONADO`);
    this.titulo.push(livro);
  }

  listaLivros() {
    console.log(this.titulo);
  }
}

biblioteca = new Biblioteca();
biblioteca.adicionar("SHAKSPARE");
biblioteca.adicionar("APRENDENDO A APRENDER");
biblioteca.listaLivros();
