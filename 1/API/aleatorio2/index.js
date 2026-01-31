async function p() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const dados = await response.json();
  const f = await dados.slip.advice;
  console.log(f);
}
p();
