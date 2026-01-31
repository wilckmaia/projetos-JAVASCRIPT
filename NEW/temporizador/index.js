let valor;
function Temporizador() {
  this.start = function (parametro) {
    valor = parametro;
  };
}
async function temp(n) {
  let b = (await Temporizador()) && reset();
  for (let i = 0; i <= valor; i++) {
    if (i == n) {
      console.log(i);
      break;
    }
    console.log(i);
  }
}
function reset() {
  return (valor = 0);
}

const temporizador = new Temporizador();
temporizador.start(100);
console.log(temporizador);
temp(10);
reset();
