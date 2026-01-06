function fatorial(a) {
  let result = a;
  while (a > 0) {
    a--;
    result = result * a;
    console.log(result);
  }
}
fatorial(5);
