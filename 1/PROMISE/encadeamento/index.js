let encadear = new Promise((resolve) => {
  resolve(2);
})

  .then((v) => {
    return v * 2;
  })
  .then((v) => {
    return v * 2;
  })
  .then((v) => {
    return console.log(v);
  });
