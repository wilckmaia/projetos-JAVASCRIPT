const nome = "Wilck";
const sobrenome = " Maia";
const a = nome + sobrenome;
const b = a.split(" ");
function completo() {
  console.log(b);
}

function completarNome(nom, sob) {
  const s = nom + " " + sob;

  console.log(s);
}
completarNome("Wilck", "Maia");
completo();
