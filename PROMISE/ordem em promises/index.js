async function um() {
  let promessa = new Promise((res, rej) => {
    res("AAAAAA");
  });
  promessa.then((n) => {
    console.log(n);
  });
}
async function dois() {
  const a = await um();
  let promessa2 = new Promise((res, rej) => {
    res("BBBBB");
  });
  promessa2.then((n) => {
    console.log(n);
  });
}
dois();
