let r = 0;
function inverter(a) {
  while (a > 0) {
    r = 10 * r + (a % 10);
    a = Math.floor(a / 10);
    console.log(r);
  }
}
inverter(587);
