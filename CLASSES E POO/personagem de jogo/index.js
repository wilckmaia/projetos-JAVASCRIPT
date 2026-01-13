class Personagem {
  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }
  receberDano(dano) {
    this.vida = 100;
    console.log("VIDA  " + this.vida);
    console.log("DANO RECEBIDO " + dano);
    this.vida -= dano;
    if (this.vida <= 20) {
      console.log("VIDA ATUAL " + this.vida + "  ESTADO CRITICO!!!");
    } else if (this.vida <= 50) {
      console.log("VIDA ATUAL " + this.vida + "  METADE DA VIDA");
    } else if (this.vida >= 75) {
      console.log("VIDA ATUAL " + this.vida + "  BAIXA VIDA PERDIDA");
    }
  }

  curar(valor) {
    this.vida += valor;
    console.log("VIDA CURADA " + this.vida);
  }
}
let personagem = new Personagem("LINK");
personagem.receberDano(90);
personagem.curar(70);
