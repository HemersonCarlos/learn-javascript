
describe('Orientação a Objetos', function() {

  // IMPLEMENTE a classe Pessoa que recebe dois parâmetros: firstname e lastname no construtor
  // e implemente o método fullname() que retorna o nome completo

  class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }

    fullname() {
      return `${this.nome} ${this.sobrenome}`;
    }
  }


  it('retorna o nome completo Willian Gibson', function () {
    var pessoa = new Pessoa('Willian', 'Gibson');

    expect(pessoa.fullname()).toBe('Willian Gibson');
  });

  it('retorna o nome completo Douglas Adams', function () {
    var pessoa = new Pessoa('Douglas', 'Adams');

    expect(pessoa.fullname()).toBe('Douglas Adams');
  });
});
