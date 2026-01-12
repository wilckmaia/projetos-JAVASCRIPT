let iniciar = "    Start   ";
async function continuar() {
  console.log(iniciar);
  return "...loading...";
}
async function tracos() {
  let i = await continuar();
  console.log(i);
  return "...loading...";
}
async function finish() {
  let i = await tracos();
  console.log(i);
  console.log("   Finished   ");
}
finish();
