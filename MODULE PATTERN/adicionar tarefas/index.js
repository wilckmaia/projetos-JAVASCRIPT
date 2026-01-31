const Tarefas = (function () {
  let tarefas = "";

  return {
    add(novaTarefa) {
      return (tarefas = novaTarefa);
    },
  };
})();

console.log(Tarefas.add("Baisebol,"), Tarefas.add("Limpar o quarto"));
