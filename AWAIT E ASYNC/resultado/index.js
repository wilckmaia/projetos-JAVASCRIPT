async function soDepois() {
  let i = await primeiro();
  console.log("1");
}
async function primeiro() {
  setTimeout(() => {
    console.log("2");
  }, 2000);
}
soDepois();
