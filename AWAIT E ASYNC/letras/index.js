let a = "a";

async function u() {
  return a + "b";
}
async function c() {
  let i = await u();
  console.log(i);
  return i + "c";
}
async function d() {
  let i = await c();
  console.log(i);
  return i + "d";
}
async function e() {
  let i = await d();
  console.log(i);
  return i + "e";
}
async function f() {
  let i = await e();
  console.log(i);
}
f();
