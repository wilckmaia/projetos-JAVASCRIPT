let a = 10;

async function fluxo() {
  return a + 10;
}

async function fluxo2() {
  let i = await fluxo();
  console.log(i);
  return i + 10;
}

async function fluxo3() {
  let i = await fluxo2();
  console.log(i);
  return i + 10;
}

async function fluxo4() {
  let i = await fluxo3();
  console.log(i);
  return i + 10;
}
async function fluxo5() {
  let i = await fluxo4();
  console.log(i);
}
