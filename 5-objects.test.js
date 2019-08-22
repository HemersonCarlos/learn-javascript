// Substituia RESPOSTA pela resposta correta

describe('Objects', function () {
  describe("propriedades", function () {
    let descricao;

    beforeEach(function () {
      descricao = {  nome: 'Joker', sobrenome: 'Harley' };
    });

    it('should confirm objects are collections of properties', function () {
      //expect(descricao.nome).toBe(RESPOSTA);
      expect(descricao.nome).toBe('Joker');
    });

    it('should confirm that properties are case sensitive', function () {
      //expect(descricao.sobrenome).toBe(RESPOSTA);
      //expect(descricao.sobrenome).toBe(RESPOSTA);
      
      expect(descricao.sobrenome).toBe('Harley');
      expect(descricao.sobrenome).toBe('Harley');
    });
  });

  it('should know properties that are functions act like methods', function () {
    var descricao = {
      nome : 'Brain',
      henchman: 'Pinky',
      battleCry: function (noOfBrains) {
        return 'They are ' + this.henchman + ' and the' +
          Array(noOfBrains + 1).join(" " + this.nome);
      }
    };

    var battleCry = descricao.battleCry(4);
    //expect(RESPOSTA).toMatch(battleCry);
    expect('They are Pinky and the Brain Brain Brain Brain Brain').toMatch(battleCry);
  });

  it('should confirm that when a function is attached to an object, \'this\' refers to the object', function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var descricao = {
      nome: 'James Wood',
      henchman: 'Adam West',
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    //expect(currentYear).toBe(RESPOSTA);
    //expect(descricao.calculateAge()).toBe(RESPOSTA);

    expect(currentYear).toBe(2019);
    expect(descricao.calculateAge()).toBe(49);
  });

  describe("'in' keyword", function () {
    var descricao;
    beforeEach(function () {
      descricao = {
        nome: 'The Monarch',
        sobrenome: 'Dr Girlfriend',
        theBomb: true
      };
    });

    it('should have the bomb', function () {
      var hasBomb = 'theBomb' in descricao;


      //expect(hasBomb).toBe(RESPOSTA);
      expect(hasBomb).toBe(true);
    });

    it('should not have the detonator however', function () {

      var hasDetonator = 'theDetonator' in descricao;

      //expect(hasDetonator).toBe(RESPOSTA);
      
      expect(hasDetonator).toBe(false);
    });
  });

  it('should know that properties can be added and deleted', function () {
    var descricao = { nome : 'Agent Smith', henchman: 'Agent Smith' };

    //expect('secretary' in descricao).toBe(RESPOSTA);
    expect('secretary' in descricao).toBe(false);

    descricao.secretary = 'Agent Smith';
    //expect('secretary' in descricao).toBe(RESPOSTA);
    expect('secretary' in descricao).toBe(true);

    delete descricao.henchman;
    //expect('henchman' in descricao).toBe(RESPOSTA);
    expect('henchman' in descricao).toBe(false);
  });


  it('should use prototype to add to all objects', function () {
      function Circle(radius) {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = 'red';

      //expect(simpleCircle.colour).toBe(RESPOSTA);
      //expect(colouredCircle.colour).toBe(RESPOSTA);

      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe('red');

      Circle.prototype.describe = function () {
        return 'This circle has a radius of: ' + this.radius;
      };

      //expect(simpleCircle.describe()).toBe(RESPOSTA);
      //expect(colouredCircle.describe()).toBe(RESPOSTA);

      expect(simpleCircle.describe()).toBe('This circle has a radius of: 10');
      expect(colouredCircle.describe()).toBe('This circle has a radius of: 5');
  });
});
