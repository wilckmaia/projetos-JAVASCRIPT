const p1 = new Promise((res, rej) => {
  const sucesso = true;
  if (sucesso) {
    res("POSITIVO");
  } else {
    rej("NEGATIVO");
  }
});

const p2 = new Promise((res, rej) => {
  const sucesso = true;
  if (sucesso) {
    res("POSITIVO");
  } else {
    rej("NEGATIVO");
  }
});
const p3 = new Promise((res, rej) => {
  const sucesso = true;
  if (sucesso) {
    res("POSITIVO");
  } else {
    rej("NEGATIVO");
  }
});

const promessa = Promise.all([p1, p2, p3]);
promessa
  .then((r) => {
    console.log(r);
  })
  .catch((r) => {
    console.log("Erro Geral");
  });
