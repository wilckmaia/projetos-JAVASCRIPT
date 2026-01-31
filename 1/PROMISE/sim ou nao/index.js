function retornaSimOuNao(trueOrFalse) {
  let promessa = new Promise((res, rej) => {
    if (trueOrFalse == true) {
      res("SIM");
    } else {
      rej("NÂO");
    }
  });

  promessa
    .then((n) => {
      console.log(n);
    })
    .catch((s) => {
      console.log(s);
    });
}

retornaSimOuNao(true);
