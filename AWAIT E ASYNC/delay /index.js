let pausa = setTimeout(() => {}, 1000);

async function delay() {
  let espera = await pausa;
  console.log("2");
}
delay();
