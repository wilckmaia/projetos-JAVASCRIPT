function criadorDeLogs(log) {
  if (log === "Erro") {
    return { log, executar: () => console.log(`LOG de ${log}`) };
  }
  if (log === "Aviso") {
    return { log, executar: () => console.log(`LOG de ${log}`) };
  }
  if (log === "Info") {
    return { log, executar: () => console.log(`LOG de ${log}`) };
  }
}
const log1 = criadorDeLogs("Aviso");
log1.executar();
