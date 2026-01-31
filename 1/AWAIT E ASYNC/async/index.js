let a = 1;

async function b() {
  let i = await c();
  console.log(a + 10);
}
async function c() {
  return a + 1;
}

b();
