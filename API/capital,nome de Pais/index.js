async function apiPais() {
  const response = await fetch("https://restcountries.com/v3.1/name/brazil");
  const dados = await response.json();
  const nome = await dados[0].name;
  const capital = await dados[0].capital[0];
  const populacao = await dados[0].population;
  console.log(nome, capital, populacao);
}
apiPais();
