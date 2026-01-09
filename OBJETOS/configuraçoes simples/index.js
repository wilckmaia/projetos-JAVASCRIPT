let config = {
  tema: "light",
  idioma: "PT-BR",
};
console.log(
  `Configurações do sistema inicial:   tema: ${config.tema}  idioma: ${config.idioma}`
);

function alterar() {
  let a = (config.tema = "dark");
  let b = (config.idioma = "ENG");
  console.log(
    `Configurações do sistema atualizado:   tema: ${a}  idioma: ${b}`
  );
}
alterar();
