async function timer() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true"
  );
  const dados = await response.json();
  const time = await dados.current_weather.time;
  console.log(time);
}
timer();
