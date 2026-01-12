const login = "CARREGANDO";
async function carr() {
  console.log(login);
}
async function carr2() {
  let a = await carr();
  console.log(login);
}
async function carr3() {
  let i = await carr2();
  console.log(login);
}
async function carr4() {
  let i = await carr3();
  console.log(login);
}
async function carr5() {
  let i = await carr4();
  console.log(login);
}
async function carr6() {
  let i = await carr5();

  console.log("ENTROU");
}
carr6();
