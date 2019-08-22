// Substitua RESPOSTA pela resposta correta

describe('Arrays', function() {
  it('should create arrays', function() {
    var emptyArray = [];
    //expect(emptyArray.length).toBe(RESPOSTA);
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
    //expect(multiTypeArray[0]).toBe(RESPOSTA);
    //expect(multiTypeArray[2]).toBe(RESPOSTA);
    //expect(multiTypeArray[3]()).toBe(RESPOSTA);
    //expect(multiTypeArray[4].value1).toBe(RESPOSTA);
    //expect(multiTypeArray[4]["value2"]).toBe(RESPOSTA);
    //expect(multiTypeArray[5][0]).toBe(RESPOSTA);
  });

  it('should understand array literals', function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);
    //expect(array).toEqual([1, RESPOSTA]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
    //expect(array).toEqual(RESPOSTA);
  });

  it('should understand array length', function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    //expect(fourNumberArray.length).toBe(RESPOSTA);
    fourNumberArray.push(5, 6);
    //expect(fourNumberArray.length).toBe(RESPOSTA);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    //expect(tenEmptyElementArray.length).toBe(RESPOSTA);
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    //expect(tenEmptyElementArray.length).toBe(RESPOSTA);
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it('should slice arrays', function () {
    var array = ['peanut', 'butter', 'and', 'jelly'];

    /* expect(array.slice(0, 1)).toEqual(RESPOSTA);
    expect(array.slice(0, 2)).toEqual(RESPOSTA);
    expect(array.slice(2, 2)).toEqual(RESPOSTA);
    expect(array.slice(2, 20)).toEqual(RESPOSTA);
    expect(array.slice(3, 0)).toEqual(RESPOSTA);
    expect(array.slice(3, 100)).toEqual(RESPOSTA);
    expect(array.slice(5, 1)).toEqual(RESPOSTA); */

    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(['peanut', 'butter']);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(['and', 'jelly']);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(['jelly']);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it('should push and pop', function () {
    var array = [1, 2];
    array.push(3);

    //expect(array).toEqual(RESPOSTA);
    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    //expect(poppedValue).toBe(RESPOSTA);
    //expect(array).toEqual(RESPOSTA);

    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it('should know about shifting arrays', function () {
    var array = [1, 2];

    array.unshift(3);
    //expect(array).toEqual(RESPOSTA);
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();
    //expect(shiftedValue).toEqual(RESPOSTA);
    //expect(array).toEqual(RESPOSTA);

    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});
