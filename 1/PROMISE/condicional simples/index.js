function vOuF(p) {
  let promessa = new Promise((res, rej) => {
    if (p === true) {
      res("Verdadeiro");
    } else {
      rej("Falso");
    }
  });
  promessa
    .then((r) => {
      console.log(r);
    })
    .catch((j) => {
      console.log(j);
    });
}
vOuF(true);
