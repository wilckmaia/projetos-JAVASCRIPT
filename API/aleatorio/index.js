async function api() {
  const frase = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const dados = await frase.json();
  const palavra = dados.text;
  console.log(palavra);
}
api();
