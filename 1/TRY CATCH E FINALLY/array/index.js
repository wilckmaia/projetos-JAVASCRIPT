function validarArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("O valor fornecido não é um array.");
  }

  if (arr.length === 0) {
    throw new Error("O array está vazio.");
  }

  return `Array válido! Tamanho: ${arr.length}`;
}
try {
  console.log(validarArray([1, 2, 3]));
} catch (erro) {
  console.error("Erro:", erro.message);
}
