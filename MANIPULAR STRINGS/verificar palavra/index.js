function verificaPalavra(params) {
  const v = params.includes(
    "python",
    "javascript",
    "c++",
    "c#",
    "nodejs",
    "Python",
    "Javascript"
  );
  console.log(v);
}

verificaPalavra("Aqui estou digitando para testar se tem a palavra python");
