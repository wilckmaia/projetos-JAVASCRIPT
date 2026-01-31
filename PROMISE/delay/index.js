const delay = new Promise((res, rej) => {
  setTimeout(() => {
    res("1");
  }, 1000);
});

delay.then((a) => console.log(a));

console.log("2");
