describe('string', function() {
  it('retorna o tamanho de uma string', function() {
    const str = 'teste';
    expect(RESPOSTA).toBe(5); // IMPLEMENTE
  });

  it('retorna o segundo char de uma string', function() {
    const str = 'abcde';
    expect(RESPOSTA).toBe('b'); // IMPLEMENTE
  });

  it('retorna o os 5 primeiros chars de uma string', function() {
    const str = 'abcdefghi';
    expect(RESPOSTA).toBe('abcde'); // IMPLEMENTE
  });

  it('retorna a concatenação de duas strings', function() {
    const str_one = 'Hello';
    const str_two = ' World!';

    expect(RESPOSTA).toBe('Hello World!'); // IMPLEMENTE
  });

  it('retorna a interpolação de duas strings', function() {
    const str_one = 'Hello';
    const str_two = 'World';

    expect(RESPOSTA).toBe('Hello World!'); // IMPLEMENTE
  });

  it('replace uma parte da string', function() {
    const str = 'Hello, World!';

    expect(RESPOSTA).toBe('Hello, Student!'); // IMPLEMENTE
  });

  it('split uma string', function() {
    const str = 'Isso é uma string';

    expect(RESPOSTA).toBe(['Isso', 'é', 'uma', 'string']); // IMPLEMENTE
  });

  it('lower case uma string', function() {
    const str = 'ISSO É UMA STRING';

    expect(RESPOSTA).toBe('isso é uma string'); // IMPLEMENTE
  });

  it('upper case uma string', function() {
    const str = 'isso é uma string';

    expect(RESPOSTA).toBe('ISSO É UMA STRING'); // IMPLEMENTE
  });
});
