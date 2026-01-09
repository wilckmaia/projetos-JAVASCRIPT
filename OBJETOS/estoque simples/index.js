let estoque = {
  produto: "Iphone",
  quantidade: 100,
};

function ChegadaDeProdutoAoEstoque(novoProduto) {
  let novos = estoque.quantidade + novoProduto;
  console.log(
    "Estoque inicial : " + estoque.quantidade + " pós chegada : " + novos
  );

  function retiradaDeProdutoAoEstoque(retirada) {
    let menos = estoque.quantidade - retirada;
    if (menos < 0) {
      console.log(
        "Estoque inicial : " + estoque.quantidade + " pós retirada : " + 0
      );
    } else {
      console.log(
        "Estoque inicial : " + estoque.quantidade + " pós retirada : " + menos
      );
    }
  }
  retiradaDeProdutoAoEstoque(101);
}

ChegadaDeProdutoAoEstoque(100);
