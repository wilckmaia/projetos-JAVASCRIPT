async function api() {
  const response = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=S%C3%A3o%20Paulo"
  );
  const dados = await response.json();
  const temperaSP = await dados.results[0].name;
  const elevacao = await dados.results[0].elevation;
  const latitude = await dados.results[0].latitude;
  console.log(
    "Cidade : " +
      temperaSP +
      "   Elevação : " +
      elevacao +
      "   Latitude : " +
      latitude
  );
}
api();
