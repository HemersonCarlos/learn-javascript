// Substituia RESPOSTA pela resposta correta

describe('Função que recebe a temperatura em graus Farenheit e retorna em graus Celsius.', function() {
  function farenheitToCelsius(farenheit) {
    //return RESPOSTA; // IMPLEMENTE
    return typeof farenheit == 'number' ? (farenheit - 32) * 5/9 : 0;
  }

  it('32 fahrenheit é 0 celsius', function() {
    expect(farenheitToCelsius(32)).toBe(0);
  });

  it('104 fahrenheit é 40 celsius', function() {
    expect(farenheitToCelsius(104)).toBe(40);
  });

  it('104 fahrenheit é 40 celsius', function() {
    expect(farenheitToCelsius(212)).toBe(100);
  });
});

describe('Função que recebe as letras F/f ou M/m e imprime: masculino, feminino ou sexo inválido.', function() {
  function femininoOuMasculino(letra) {
    //return RESPOSTA; // IMPLEMENTE
    
    if(letra.toLowerCase() === 'f')
      return 'feminino';

    if(letra.toLowerCase() === 'm')
      return 'masculino';

    return 'sexo inválido';
    
    }

  it('M retorna masculino', function() {
    expect(femininoOuMasculino('M')).toBe('masculino');
  });

  it('m retorna masculino', function() {
    expect(femininoOuMasculino('m')).toBe('masculino');
  });

  it('F retorna feminino', function() {
    expect(femininoOuMasculino('F')).toBe('feminino');
  });

  it('f retorna feminino', function() {
    expect(femininoOuMasculino('f')).toBe('feminino');
  });

  it('letra inválida retorna sexo inválido', function() {
    expect(femininoOuMasculino('XYZ')).toBe('sexo inválido');
  });
});

describe('Função que leia 3 valores inteiros e exiba-os em ordem crescente', function() {
  function ordenar(val1, val2, val3) {
    //return RESPOSTA; // IMPLEMENTE
    return [val1, val2, val3].sort();
  }

  it('retorna 3, 2, 1 em ordem', function() {
    expect(ordenar(3, 2, 1)).toEqual([1, 2, 3]);
  });

  it('retorna 6, 4, 3 em ordem', function() {
    expect(ordenar(6, 4, 3)).toEqual([3, 4, 6]);
  });

  it('retorna 9, 3, 1 em ordem', function() {
    expect(ordenar(9, 3, 1)).toEqual([1, 3, 9]);
  });

  it('retorna 1, 2, 3 em ordem', function() {
    expect(ordenar(1, 2, 3)).toEqual([1, 2, 3]);
  });
});

describe('Função que pega dois números inteiros e gere os números inteiros que estão no intervalo entre eles', function() {
  function entreNumeros(val1, val2) {
    //return RESPOSTA; // IMPLEMENTE
    var resultado = [];
      
    for(var i = val1+1; i < val2; i++)
      resultado.push(i);

    return resultado;
  }

  it('retorna os números entre 1 e 1', function() {
    expect(entreNumeros(1, 1)).toEqual([]);
  });

  it('retorna os números entre 1 e 2', function() {
    expect(entreNumeros(1, 2)).toEqual([]);
  });

  it('retorna os números entre 4 e 6', function() {
    expect(entreNumeros(4, 6)).toEqual([5]);
  });

  it('retorna os números entre 8 e 12', function() {
    expect(entreNumeros(8, 12)).toEqual([9, 10, 11]);
  });

  it('retorna os números entre 10 e 20', function() {
    expect(entreNumeros(10, 20)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19]);
  });
});

describe('Função que retornas os números pares entre dois números inteiros', function() {
  function paresEntreNumeros(val1, val2) {
    //return RESPOSTA; // IMPLEMENTE

    var resultado = [];

    for(var i = val1+1; i < val2; i++) 
    {
      if(i%2==0)
        resultado.push(i);
    }

    return resultado;
  }

  it('retorna os números pares entre 1 e 3', function() {
    expect(paresEntreNumeros(1, 3)).toEqual([2]);
  });

  it('retorna os números pares entre 1 e 10', function() {
    expect(paresEntreNumeros(1, 10)).toEqual([2, 4, 6, 8]);
  });

  it('retorna os números pares entre 9 e 11', function() {
    expect(paresEntreNumeros(9, 11)).toEqual([10]);
  });

  it('não retorna retorna nenhum número entre 11 e 9', function() {
    expect(paresEntreNumeros(11, 9)).toEqual([]);
  });

  it('não retorna retorna nenhum número entre 1 e 1', function() {
    expect(paresEntreNumeros(1, 1)).toEqual([]);
  });

  it('não retorna retorna nenhum número entre 1 e 2', function() {
    expect(paresEntreNumeros(1, 2)).toEqual([]);
  });
});

describe('Função que recebe um array de números e retorna um array ordem inversa', function() {
  function reverso(arr) {
    //return RESPOSTA; // IMPLEMENTE
    return arr.reverse();
  }

  it('retorna o array invertivo teste um', function() {
    expect(reverso([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('retorna o array invertivo teste dois', function() {
    expect(reverso([3, 2, 1, 0, -1])).toEqual([-1, 0, 1, 2, 3]);
  });

  it('retorna o array invertivo teste três', function() {
    expect(reverso([6, 4, 5, 3, 1, 2])).toEqual([2, 1, 3, 5, 4, 6]);
  });

  it('retorna o array invertivo teste quatro', function() {
    expect(reverso(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a']);
  });
});

describe('Função que recebe um vetor, e retorna quantas consoantes foram encontradas em ordem', function() {
  function consoantes(arr) {
    //return RESPOSTA; // IMPLEMENTE
    var result = [];
    arr.forEach(el => 
    {
      if(el.toLowerCase() == 'a' ||
         el.toLowerCase() == 'e' ||
         el.toLowerCase() == 'i' ||
         el.toLowerCase() == 'o' ||
         el.toLowerCase() == 'u')
         result.push(el);
    });
    return result.sort();
  }

  it('retorna o array de consoantes teste um', function() {
    expect(consoantes(['a', 'b', 'c'])).toEqual(['a']);
  });

  it('retorna um array vaziu se nenhuma consoante for encontrada', function() {
    expect(consoantes(['b', 'x'])).toEqual([]);
  });

  it('retorna o array de consoantes teste três', function() {
    expect(consoantes(['a', 'e', 'i', 'x', 'o', 'u'])).toEqual(['a', 'e', 'i', 'o', 'u']);
  });

  it('retorna o array de consoantes teste quatro', function() {
    expect(consoantes(['e', 'f', 'i', 'g', 'a', 'b', 'c', 'd'])).toEqual(['a', 'e', 'i']);
  });
});
