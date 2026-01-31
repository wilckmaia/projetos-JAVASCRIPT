for (let i = 0; i <= 30; i++) {
  switch (true) {
    case i % 3 === 0:
      console.log("fizz");
      break;
    case i % 5 === 0:
      console.log("buzz");
      break;
    default:
      console.log(i);
  }
}
