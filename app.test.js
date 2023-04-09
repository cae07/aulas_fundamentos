// criamos um teste que quebra
// fazemos o teste passar
// refatoramos o codigo

const { sum, subtraction } = require('./app');

describe('Function sum', () => {
  test('Verifica que 2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
  
  test('Verifica que 6 + 12 = 18', () => {
    expect(sum(6, 12)).toEqual(18);
  });
  
  test.skip('Verifica que 2 + "2" dispara um erro', () => {
    try {
      const response = sum(2, '2');
      expect(response).toEqual(4);
      
    } catch (error) {
      const expectError = new Error('Os valores precisam ser numéricos');
  
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(expectError);
    }
  })
});

describe('Function subtraction', () => {
  it('Verifica que 19 - 12 = 7', () => {
    const response = subtraction(19, 12);
    expect(response).toBe(7);
  })
})