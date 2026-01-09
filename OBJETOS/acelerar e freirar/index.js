let carro = {
  marca: "Ferrari",
  velocidade: 0,
};

function acelerar(a) {
  let mais = carro.velocidade + a;
  console.log("Acelerou de :" + carro.velocidade + "  Para : " + mais + "km/h");

  function freiar(b) {
    let menos = mais - b;
    console.log("Freiou de : " + mais + "  Para : " + menos + "km/h");
  }
  freiar(80);
}

acelerar(100);
