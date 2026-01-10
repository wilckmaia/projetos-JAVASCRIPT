let obj = ["ativo", "inativo", "ativo", "inativo"];
if (obj[0] === "ativo") {
  console.log(true);
}
if (obj[1] === "ativo") {
  console.log(true);
}

if (obj[2] === "ativo") {
  console.log(true);
}

if (obj[3] === "ativo") {
  console.log(true);
}

const pessoas = [
  { nome: "Ana", ativ: true },
  { nome: "Pedro", ativ: false },
];

const ativos = pessoas.filter((p) => p.ativ);
console.log(ativos);
