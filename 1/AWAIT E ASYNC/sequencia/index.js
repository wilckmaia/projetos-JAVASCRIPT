async function um() {
  console.log(1);
}
async function dois() {
  let i = await um();
  console.log(2);
}
async function tres() {
  let i = await dois();
  console.log(3);
}

async function quatro() {
  let i = await tres();
  console.log(4);
}
async function cinco() {
  let i = await quatro();
  console.log(5);
}
cinco();
