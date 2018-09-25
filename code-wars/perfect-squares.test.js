const {sumOfSquares} = require('./perfect-squares');

describe('Solution', () => {
  it('Base tests', () => {
    expect(sumOfSquares(1)).toEqual(1);
    expect(sumOfSquares(2)).toEqual(2);
    expect(sumOfSquares(3)).toEqual(3);
    expect(sumOfSquares(4)).toEqual(1);
    expect(sumOfSquares(15)).toEqual(4);
  
  
    expect(sumOfSquares(17)).toEqual(2);
    expect(sumOfSquares(18)).toEqual(2);
    expect(sumOfSquares(19)).toEqual(3);
  });
  
  it('single test', () => {
    expect(sumOfSquares(4)).toEqual(1);
  })
});

