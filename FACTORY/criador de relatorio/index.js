function criadorDeRelatorios(tipo, relatorio) {
  if (tipo === "pdf") {
    return {
      tipo,
      relatorio,
      forma: () => console.log(`TIPO: ${tipo},  RELATORIO: ${relatorio}`),
    };
  }
  if (tipo === "csv") {
    return {
      tipo,
      relatorio,
      forma: () => console.log(`TIPO: ${tipo},  RELATORIO: ${relatorio}`),
    };
  }
  if (tipo === "json") {
    return {
      tipo,
      relatorio,
      forma: () => console.log(`TIPO: ${tipo},  RELATORIO: ${relatorio}`),
    };
  }
}
const relatorio1 = criadorDeRelatorios("json", ".............................");
relatorio1.forma();
