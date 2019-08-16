function hello(name) {
  // IMPLEMENTE
  return `Hello, ${name}!`
}

describe('hello', function() {
  it('deve retornar Hello, Alan!', function() {
    expect(hello('Alan')).toBe('Hello, Alan!');
  });
});
