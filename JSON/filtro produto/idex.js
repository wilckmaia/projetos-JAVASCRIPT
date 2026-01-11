let json = {
  item1: {
    produto: "Macbook",
    categoria: "tecnologia",
  },
  item2: {
    produto: "Casa",
    categoria: "imobiliario",
  },
  item3: {
    produto: "CDB",
    categoria: "investimentos",
  },
};

function cacarCategoria(a) {
  if (a === json.item1.categoria) {
    console.log(json.item1.produto);
  } else if (a === json.item2.categoria) {
    console.log(json.item2.produto);
  } else if (a === json.item3.categoria) {
    console.log(json.item3.produto);
  }
}
cacarCategoria("tecnologia");
