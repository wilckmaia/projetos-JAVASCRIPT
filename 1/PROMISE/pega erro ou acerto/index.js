const promessa = new Promise((res, rej) => {
  const suceeso = true;

  if (suceeso) {
    res("Tduo certo");
  } else {
    rej("Tudo errado");
  }
});

promessa
  .then((n) => {
    console.log(n);
  })

  .catch((err) => {
    console.log(err);
  });
