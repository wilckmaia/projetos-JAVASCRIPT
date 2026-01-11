let promessa = new Promise((res, rej) => {
  setTimeout(() => {
    let s = false;
    if (s) {
      res("UM");
    } else {
      rej("NEGADO UM");
    }
  }, 1000);
});
let promessa2 = new Promise((res, rej) => {
  let s = true;
  if (s) {
    res("DOIS");
  } else {
    rej("NEGADO DOIS");
  }
});

let promessa3 = new Promise((res, rej) => {
  let s = true;
  if (s) {
    res("TRES");
  } else {
    rej("NEGADO TRES");
  }
});

Promise.race([promessa, promessa2, promessa3])
  .then((r) => {
    console.log(r);
  })
  .catch((j) => {
    console.log("Erro : " + j);
  });
