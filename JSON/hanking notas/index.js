let json = {
  alunos: ["1", "2"],
  notas: [50, 1000],
};
let melhorAteAgora = json.notas[0] >= json.notas[1];

if (melhorAteAgora === true) {
  console.log(json.notas[0]);
} else if (melhorAteAgora === false) {
  console.log(json.notas[1]);
}
