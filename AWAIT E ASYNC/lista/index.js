let array = [1, 2, 3];
async function um() {
  console.log(array[0]);
}
async function dois() {
  let i = await um();
  console.log(array[1]);
}
async function tres() {
  let i = await dois();
  console.log(array[2]);
}

tres();
