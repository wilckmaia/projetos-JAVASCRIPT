function criadorDeNotificacoes(notificacao, menssagem) {
  if (notificacao === "email") {
    return {
      notificacao,
      menssagem,
      cria: () =>
        console.log(`Menssagem recebido por ${notificacao}, msg: ${menssagem}`),
    };
  }
  if (notificacao === "sms") {
    return {
      notificacao,
      menssagem,
      cria: () =>
        console.log(`Menssagem recebido por ${notificacao}, msg: ${menssagem}`),
    };
  }
  if (notificacao === "push") {
    return {
      notificacao,
      menssagem,
      cria: () =>
        console.log(`Menssagem recebido por ${notificacao}, msg: ${menssagem}`),
    };
  }
}

const m1 = criadorDeNotificacoes(
  "sms",
  "Boa tarde, venho aqui em nome da empresa ............."
);
m1.cria();
