const p = function Personagem() {
  this.vida = 10;
  this.ataque = 100;

  this.dano = function (damage) {
    this.vida -= damage;
  };
  this.atacar = function (ataque) {
    this.ataque += ataque;
  };
};

const personagem = new p();
personagem.dano(1);
personagem.atacar(100);
console.log(personagem);
