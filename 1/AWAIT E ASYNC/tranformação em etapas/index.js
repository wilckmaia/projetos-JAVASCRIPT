let i = 10;

async function a() {
  return i * 10;
}

async function b() {
  let espera = await a();
  return espera * 10;
}

async function c() {
  let espera = await b();
  return espera * 10;
}

async function d() {
  let espera = await c();
  console.log(espera);
}
d();
