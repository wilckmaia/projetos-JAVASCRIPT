function SistemaPagamento(metodo, nome) {
  if (metodo === "Pix") {
    return {
      metodo,
      nome,
      pagar: () =>
        console.log(`${nome} está usando o método ${metodo} para pagar`),
    };
  }
  if (metodo === "Cartao") {
    return {
      metodo,
      nome,
      pagar: () =>
        console.log(`${nome} está usando o método ${metodo} para pagar`),
    };
  }
  if (metodo === "Boleto") {
    return {
      metodo,
      nome,
      pagar: () =>
        console.log(`${nome} está usando o método ${metodo} para pagar`),
    };
  }
}

const user1 = SistemaPagamento("Boleto", "Wilck");
user1.pagar();
