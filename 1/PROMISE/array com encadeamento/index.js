let array = [1, 2, 3, 4, 5, 6, 7];
let promessa = new Promise((res, rej) => {
  res(10);
});
promessa

  .then((r) => {
    return array[3] * r;
  })

  .then((r) => {
    return array[1] * r;
  })

  .then((r) => {
    console.log(r);
  });
