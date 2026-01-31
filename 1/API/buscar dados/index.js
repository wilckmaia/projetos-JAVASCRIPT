async function api() {
  const response = await fetch("https://randomuser.me/api/");
  const dados = await response.json();
  const nome = await dados.results[0].name;
  const location = await dados.results[0].location;
  console.log(nome, location);
}

api();
