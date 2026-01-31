let filmes = {
  titulo: ["Viveiro", "O aprendiz", "A rede social"],
  genero: ["suspense", "biografia", "historico"],
  avaliacao: [8, 9, 10],
};
function maior(n) {
  return filmes.avaliacao.filter((a) => {
    if (n <= filmes.avaliacao[0]) {
      console.log(
        filmes.avaliacao[0],
        filmes.avaliacao[1],
        filmes.avaliacao[2]
      );
    } else if (n === filmes.avaliacao[1]) {
      console.log(filmes.avaliacao[1], filmes.avaliacao[2]);
    } else if (n === filmes.avaliacao[2]) {
      console.log(filmes.avaliacao[2]);
    }
  });
}
maior(10);
